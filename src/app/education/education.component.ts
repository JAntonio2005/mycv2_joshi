import { Component, OnInit } from '@angular/core';
import { Education } from '../models/education/education.model';
import { EducationService } from '../services/education-service/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [];

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.educationService.getEducation().subscribe(data => {
      this.educationList = data;
      console.log('Educación cargada:', this.educationList);
    });
  }
}
