import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Header } from '../../models/header/header.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private collectionName = 'Header'; // Asegúrate de que coincida exactamente con el nombre de la colección en Firestore
  private headerRef: AngularFirestoreCollection<Header>;

  constructor(private firestore: AngularFirestore) {
    this.headerRef = this.firestore.collection<Header>(this.collectionName);
  }

  // Obtener datos de la colección de Header
  getHeader(): Observable<Header[]> {
    return this.headerRef.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Header;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
}
