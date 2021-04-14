import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-settings',
  templateUrl: './index-settings.component.html',
  styleUrls: ['./index-settings.component.css']
})
export class IndexSettingsComponent implements OnInit {

  constructor(private router: Router) { }

  settings:string="home";

  

  ngOnInit(): void {
    if(location.pathname=="/settings"){
      this.router.navigate(['settings/home']);
    }
    
  }

}
