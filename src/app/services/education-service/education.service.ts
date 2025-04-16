import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Education } from '../../models/education/education.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private collectionName = 'Education';
  private educationRef: AngularFirestoreCollection<Education>;

  constructor(private firestore: AngularFirestore) {
    this.educationRef = this.firestore.collection<Education>(this.collectionName);
  }

  getEducation(): Observable<Education[]> {
    return this.educationRef.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Education;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
}
