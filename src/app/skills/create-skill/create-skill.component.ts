import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { skillCreationDTO } from '../skills.models';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent implements OnInit {

  constructor(private skillsService:SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSaveChanges(skillCreationDTO: skillCreationDTO){
    this.skillsService.create(skillCreationDTO).subscribe(()=>{
      this.router.navigate(['/skills']);
    });
  }
}
