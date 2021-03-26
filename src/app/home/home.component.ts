import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeDTO } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  model:HomeDTO={label:'Hello', text:'I am Grzegorz Aszlar', underText:'Fullstack developer', photo:'assets/Icon awesome-laptop-code.svg'};

  
  ngOnInit(): void {
    
  }

  
}
