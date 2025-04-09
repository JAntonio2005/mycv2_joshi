import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/languages-service/languages.service';
import { Language } from '../models/languages/languages.model';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  languages: Language[] = [];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.getLanguages().subscribe(data => {
      this.languages = data.map(e => ({
        id: e.payload.doc.id,
        ...e.payload.doc.data()
      }));
    });
  }
}
