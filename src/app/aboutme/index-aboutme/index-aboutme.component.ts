import { animate, query, state, style, transition, trigger } from '@angular/animations';

import { AfterViewChecked, Component, HostBinding, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { skillDTO } from 'src/app/skills/skills.models';
import { SkillsService } from 'src/app/skills/skills.service';


@Component({
  selector: 'app-index-aboutme',
  templateUrl: './index-aboutme.component.html',
  styleUrls: ['./index-aboutme.component.css'],
  animations: [
    
  ]
})
export class IndexAboutmeComponent implements OnInit, OnDestroy {

  

  constructor(private skillService:SkillsService, private activatedRoute:ActivatedRoute) { }

  labels:string[];

  skills: skillDTO[];
  expList;


  ngOnInit(): void {
    if(localStorage.getItem('lang')=="english"){
      this.labels=['About me', 'Skills', 'Experience'];
    }
    if(localStorage.getItem('lang')=="polish"){
      this.labels=['O mnie', 'Umiejętności', 'Doświadczenie'];
    }


    this.skillService.getAll().subscribe(skills => {
      this.skills=skills;
    });
    this.activatedRoute.data.subscribe( (data: Data) => {
      this.expList=data['experiences'];
    })

  }

  ngOnDestroy(): void {



  }


  /* onAnimate(){
     this.state == 'normal' ? this.state = "highlighted" : this.state= 'normal';
   
   }*/






}
