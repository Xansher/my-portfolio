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

  constructor(private experienceService:ExperienceService) { }
  list:experienceDTO[];
  columnsToDisplay=['startDate','position', 'actions']
  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.experienceService.get().subscribe( list =>{
      this.list=list;
    })
  }
  delete(id:number){
    this.experienceService.delete(id).subscribe(()=>{
      this.loadData();
    });
    
  }
  format(date){
    return formatDate(date,'yyyy.MM', 'en');
  }

}
