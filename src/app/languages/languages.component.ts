import { Component, OnInit } from '@angular/core';
import { Languages } from '../models/languages/languages.model';
import { LanguagesService } from '../services/languages-service/languages.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  languages: Languages[] = [];

  constructor(private languagesService: LanguagesService) {}

  ngOnInit(): void {
    this.languagesService.getLanguages().subscribe(data => {
      this.languages = data;
    });
  }
}