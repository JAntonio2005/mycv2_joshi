import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Interest } from '../../models/interests/interests.model';

@Injectable({
  providedIn: 'root'
})
export class InterestService {
  private dbPath = '/interests';  // Ruta a la colección en Firebase

  constructor(private db: AngularFirestore) { }

  getInterests() {
    return this.db.collection<Interest>(this.dbPath).snapshotChanges();
  }
}
