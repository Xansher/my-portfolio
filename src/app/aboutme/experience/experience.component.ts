import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { experienceDTO } from 'src/app/experience/experience.model';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  language;
  list:experienceDTO[]=[{
    id:1,
    startDate: new Date(),
    endDate: new Date(),
    position:'Fullstack Developer',
    company: 'Company',
    englishDuties: "Obowiązki: \n* Programowanie urządzenia do wysyłania danych  \n* Tworzenie serwera do odbioru danych (API, Backend) \n* Tworzenie strony internetowej do wizualizacji danych",
    polishDuties: "siema"
  }
  ];

  ngOnInit(): void {
    this.language = localStorage.getItem('lang');
  }

  format(date){
    return formatDate(date,'yyyy.MM', 'en');
  }
}
