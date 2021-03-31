import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeDTO } from './home.model';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolverService implements Resolve<HomeDTO> {

  constructor(private homeService:HomeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): HomeDTO | Observable<HomeDTO> | Promise<HomeDTO> {
    
    if(localStorage.getItem('lang')=='english'){
        return this.homeService.get(1);
      //var home:HomeDTO= {id:1, label:'Hello',language:'english', text:'I am Grzegorz Aszlar', underText:'Fullstack developer', image:'assets/Icon awesome-laptop-code.svg', photo:'assets/megit.png'};
    }
    if(localStorage.getItem('lang')=='polish'){
      return this.homeService.get(2);
      //var home:HomeDTO= {id:2, label:'Cześć', language:'polish', text:'Nazywam się Grzegorz Aszlar', underText:'Fullstack developer', image:'assets/Icon awesome-laptop-code.svg', photo:'assets/megit.png'};
    }
    var home:HomeDTO;
    return home;
  }

}