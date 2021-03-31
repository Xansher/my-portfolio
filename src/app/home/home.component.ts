import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { HomeDTO } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  model:HomeDTO;

  
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.model=data['home'];
    })
  }

  
}
