import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { experienceDTO } from '../experience.model';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private experienceService:ExperienceService, private router: Router) { }

  model:experienceDTO;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( (data: Data) => {
      this.model= data['experience'];
    });
  }

  saveChanges(data){
    this.experienceService.edit(this.model.id, data).subscribe( ()=>{
      this.router.navigate(['/settings/aboutme/experience']);
    });
  }

}
