import { Component, OnInit } from '@angular/core';
import { Interests } from '../models/interests/interests.model';
import { InterestService } from '../services/interests-service/interests.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  interests: Interests[] = [];

  constructor(private interestService: InterestService) {}

  ngOnInit(): void {
    this.interestService.getInterests().subscribe(data => {
      this.interests = data;
    });
  }
}
