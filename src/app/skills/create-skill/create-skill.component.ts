import { Component, OnInit } from '@angular/core';
import { skillCreationDTO } from '../skills.models';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSaveChanges(skillCreationDTO: skillCreationDTO){
    console.log(skillCreationDTO);
  }
}
