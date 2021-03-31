import { Component, OnInit } from '@angular/core';
import { menuDTO } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  model:menuDTO;
  menuVisible= false;

  ngOnInit(): void {
    if(localStorage.getItem('lang')=="polish"){
      this.model= {home:'Główna', aboutme:'O mnie', contact:'Kontakt', settings:'Ustawienia', login:'Logowanie', register: 'Rejestracja'};
    }
    else{
      this.model= {home:'Home', aboutme:'About me', contact:'Contact', settings:'Settings', login:'Login', register: 'Register'};
    }
    
  }

  toggleMenu(){
    this.menuVisible =! this.menuVisible;
  }

  changeLanguage(){
    const language=localStorage.getItem('lang');
    if(language=='english'){
      localStorage.setItem('lang','polish');
    }else{
      localStorage.setItem('lang','english');
    }
    location.reload();
  }

}
