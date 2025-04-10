import { Component, OnInit } from '@angular/core';
import { SkillService } from '../services/skills-service/skills.service';
import { Skill } from '../models/skills/skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    this.skillService.getSkills().subscribe(data => {
      this.skills = data.map(e => ({
        id: e.payload.doc.id,
        ...e.payload.doc.data()
      }));
    });
  }
}
