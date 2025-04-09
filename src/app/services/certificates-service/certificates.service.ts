import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Certificate } from '../../models/certificates/certificate.model';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  private dbPath = '/certificates';  // Ruta de la colección en Firebase

  constructor(private db: AngularFirestore) { }

  getCertificates() {
    return this.db.collection<Certificate>(this.dbPath).snapshotChanges();
  }
}
