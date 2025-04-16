import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Certificates } from '../../models/certificates/certificate.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  private collectionName = 'Certificates';
  private certificateRef: AngularFirestoreCollection<Certificates>;

  constructor(private firestore: AngularFirestore) {
    this.certificateRef = this.firestore.collection<Certificates>(this.collectionName);
  }

  getCertificates(): Observable<Certificates[]> {
    return this.certificateRef.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Certificates;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
}
