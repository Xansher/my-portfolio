import { animate, query, state, style, transition, trigger } from '@angular/animations';

import { AfterViewChecked, Component, HostBinding, OnChanges, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-index-aboutme',
  templateUrl: './index-aboutme.component.html',
  styleUrls: ['./index-aboutme.component.css'],
  animations: [
    
  ]
})
export class IndexAboutmeComponent implements OnInit, OnDestroy {

  // @HostBinding('@modalSlideInOut') state:string;

  constructor() { }





  ngOnInit(): void {

    //this.state='void';
  }

  ngOnDestroy(): void {



  }


  /* onAnimate(){
     this.state == 'normal' ? this.state = "highlighted" : this.state= 'normal';
   
   }*/






}
