import { Component, OnInit } from '@angular/core';
import { experienceDTO } from '../experience.model';
import { ExperienceService } from '../experience.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-index-experience',
  templateUrl: './index-experience.component.html',
  styleUrls: ['./index-experience.component.css']
})
export class IndexExperienceComponent implements OnInit {

  constructor(private experienceService:ExperienceService) { }
  list:experienceDTO[];
  columnsToDisplay=['startDate','position', 'actions']
  ngOnInit(): void {
    this.experienceService.get().subscribe(list=>{
      this.list=list;
    });
  }

  delete(id:number){
    this.experienceService.delete(id).subscribe(()=>{});
  }
  format(date){
    return formatDate(date,'yyyy.MM', 'en');
  }

}
