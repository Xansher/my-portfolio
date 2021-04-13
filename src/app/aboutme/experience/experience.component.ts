import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { experienceDTO } from 'src/app/experience/experience.model';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
  
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  language;
  @Input()
  list:experienceDTO[];

  ngOnInit(): void {
    this.language = localStorage.getItem('lang');
  }

  format(date){
    return formatDate(date,'yyyy.MM', 'en');
  }
}
