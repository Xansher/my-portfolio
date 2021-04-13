import { animate, query, state, style, transition, trigger } from '@angular/animations';

import { AfterViewChecked, Component, HostBinding, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { aboutMeDTO } from 'src/app/settings/aboutme-aboutme-settings/aboutme.model';
import { AboutmeService } from 'src/app/settings/aboutme-aboutme-settings/aboutme.service';
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

  

  constructor(private skillService:SkillsService, private aboutmeService:AboutmeService, private activatedRoute:ActivatedRoute) { }
  language;
  labels:string[];
  aboutMe:aboutMeDTO;
  skills: skillDTO[];
  expList;


  ngOnInit(): void {
    this.language=localStorage.getItem('lang');
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
      this.aboutMe=data['about'];
      
      this.expList=data['experiences'];
    })

  }

  ngOnDestroy(): void {



  }


  /* onAnimate(){
     this.state == 'normal' ? this.state = "highlighted" : this.state= 'normal';
   
   }*/






}
