import { animate, query, state, style, transition, trigger } from '@angular/animations';

import { AfterViewChecked, Component, HostBinding, OnChanges, OnDestroy, OnInit } from '@angular/core';
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

  

  constructor(private skillService:SkillsService) { }

  labels:string[];

  skills: skillDTO[];



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

  }

  ngOnDestroy(): void {



  }


  /* onAnimate(){
     this.state == 'normal' ? this.state = "highlighted" : this.state= 'normal';
   
   }*/






}
