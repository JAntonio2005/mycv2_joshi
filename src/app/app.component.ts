import { Component } from '@angular/core';
import { Header } from './models/header/header.model';
import { HeaderService } from './services/header-service/header.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header: Header | undefined;

  constructor(private headerService: HeaderService) {
    this.headerService.getHeader().subscribe(data => {
      this.header = data[0];
    });
  }}    
