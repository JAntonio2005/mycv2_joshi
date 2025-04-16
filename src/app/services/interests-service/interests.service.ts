import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Interests } from '../../models/interests/interests.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterestService {
  private collectionName = 'Interests';
  private interestRef: AngularFirestoreCollection<Interests>;

  constructor(private firestore: AngularFirestore) {
    this.interestRef = this.firestore.collection<Interests>(this.collectionName);
  }

  getInterests(): Observable<Interests[]> {
    return this.interestRef.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Interests;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
}
