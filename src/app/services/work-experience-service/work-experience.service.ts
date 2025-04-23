import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { WorkExperience } from '../../models/work-experience/work-experience.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  private collectionName = 'WorkExperience';
  private workExpRef: AngularFirestoreCollection<WorkExperience>;

  constructor(private firestore: AngularFirestore) {
    this.workExpRef = this.firestore.collection<WorkExperience>(this.collectionName);
  }

  getWorkExperience(): Observable<WorkExperience[]> {
    return this.workExpRef.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as WorkExperience;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
}
