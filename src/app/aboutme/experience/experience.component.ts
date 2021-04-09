import { Component, OnInit } from '@angular/core';
import { expDTO } from './experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  list:expDTO[]=[{
    startDate:'2020.11',
    endDate:'2021.02',
    position:'Fullstack Developer',
    company: 'Company',
    description: "Obowiązki: \n* Programowanie urządzenia do wysyłania danych  \n* Tworzenie serwera do odbioru danych (API, Backend) \n* Tworzenie strony internetowej do wizualizacji danych"
  },
  {
    startDate:'2020.11',
    endDate:'2021.02',
    position:'Fullstack Developer',
    company: 'Company',
    description: "Obowiązki: \n* Programowanie urządzenia do wysyłania danych  \n* Tworzenie serwera do odbioru danych (API, Backend) \n* Tworzenie strony internetowej do wizualizacji danych"
  }];

  ngOnInit(): void {
  }

}
