import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Education } from '../../models/education/education.model';
@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private dbPath = '/education';  // Ruta a la colección en Firebase

  constructor(private db: AngularFirestore) { }

  getEducation() {
    return this.db.collection<Education>(this.dbPath).snapshotChanges();
  }
}
