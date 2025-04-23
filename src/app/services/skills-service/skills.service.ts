import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Skills } from '../../models/skills/skills.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private collectionName = 'Skills';
  private skillsRef: AngularFirestoreCollection<Skills>;

  constructor(private firestore: AngularFirestore) {
    this.skillsRef = this.firestore.collection<Skills>(this.collectionName);
  }

  getSkills(): Observable<Skills[]> {
    return this.skillsRef.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Skills;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
}
