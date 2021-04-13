import { Component, OnInit } from '@angular/core';
import { experienceDTO } from '../experience.model';
import { ExperienceService } from '../experience.service';
import { formatDate } from '@angular/common';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-index-experience',
  templateUrl: './index-experience.component.html',
  styleUrls: ['./index-experience.component.css']
})
export class IndexExperienceComponent implements OnInit {

  constructor(private experienceService:ExperienceService, private activatedRoute: ActivatedRoute) { }
  list:experienceDTO[];
  columnsToDisplay=['startDate','position', 'actions']
  ngOnInit(): void {
   this.activatedRoute.data.subscribe((data: Data) => {
     this.list=data['experiences'];
   })
  }

  delete(id:number){
    this.experienceService.delete(id).subscribe(()=>{});
  }
  format(date){
    return formatDate(date,'yyyy.MM', 'en');
  }

}
