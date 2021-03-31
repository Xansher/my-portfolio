import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation, opacity } from './animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    opacity
  ]
})
export class AppComponent implements OnInit{

  

  ngOnInit(): void {
    const language=localStorage.getItem('lang');
    if(language==null){
      localStorage.setItem('lang','english');
    }
    
  }
  
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }


}

