import { Component, OnInit } from '@angular/core';
import { InterestService } from '../services/interests-service/interests.service';
import { Interest } from '../models/interests/interests.model';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  interests: Interest[] = [];

  constructor(private interestService: InterestService) {}

  ngOnInit(): void {
    this.interestService.getInterests().subscribe(data => {
      this.interests = data.map(e => ({
        id: e.payload.doc.id,
        ...e.payload.doc.data()
      }));
    });
  }
}
