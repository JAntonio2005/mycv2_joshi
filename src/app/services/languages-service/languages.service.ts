import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Language } from '../../models/languages/languages.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private dbPath = '/languages';  // Ruta de la colección en Firebase

  constructor(private db: AngularFirestore) { }

  getLanguages() {
    return this.db.collection<Language>(this.dbPath).snapshotChanges();
  }
}

