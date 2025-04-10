import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Skill } from '../../models/skills/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private dbPath = '/skills';  // Ruta de la colección en Firebase

  constructor(private db: AngularFirestore) { }

  getSkills() {
    return this.db.collection<Skill>(this.dbPath).snapshotChanges();
  }
}
