import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutme-settings',
  templateUrl: './aboutme-settings.component.html',
  styleUrls: ['./aboutme-settings.component.css']
})
export class AboutmeSettingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

}
