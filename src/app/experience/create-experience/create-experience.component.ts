import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-create-experience',
  templateUrl: './create-experience.component.html',
  styleUrls: ['./create-experience.component.css']
})
export class CreateExperienceComponent implements OnInit {

  constructor(private experienceService:ExperienceService, private router: Router) { }

  ngOnInit(): void {

  }

  saveChanges(exp){
    this.experienceService.create(exp).subscribe( ()=>{
      this.router.navigate(['/settings/aboutme/experience']);
    } );

  }
}
