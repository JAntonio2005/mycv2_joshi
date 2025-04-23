import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header-service/header.service';
import { Header } from '../models/header/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header?: Header;

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.getHeader().subscribe(data => {
      if (data.length > 0) {
        this.header = data[0];
        console.log('Header cargado:', this.header);
      } else {
        console.warn('No se encontró ningún header en Firestore');
      }
    });
  }
}
