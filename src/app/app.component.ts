import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';
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
export class AppComponent {
  
  footer=true;
  url='';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }


}

