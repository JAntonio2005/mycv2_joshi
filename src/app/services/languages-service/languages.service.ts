import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Languages } from '../../models/languages/languages.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  private collectionName = 'Languages';
  private languagesRef: AngularFirestoreCollection<Languages>;

  constructor(private firestore: AngularFirestore) {
    this.languagesRef = this.firestore.collection<Languages>(this.collectionName);
  }

  getLanguages(): Observable<Languages[]> {
    return this.languagesRef.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Languages;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
}
