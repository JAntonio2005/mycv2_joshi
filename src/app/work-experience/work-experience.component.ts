import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience-service/work-experience.service';
import { WorkExperience } from '../models/work-experience/work-experience.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  experiences: WorkExperience[] = [];

  constructor(private workExpService: WorkExperienceService) {}

  ngOnInit(): void {
    this.workExpService.getWorkExperience().subscribe(data => {
      this.experiences = data;
      console.log('Experiencia laboral cargada:', this.experiences);
    });
  }
}

