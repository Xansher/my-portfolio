import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { skillCreationDTO, skillDTO } from '../skills.models';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private skillsService:SkillsService, private router:Router) { }

  

  model:skillDTO;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: Data)=>{
      this.model=data['skill'];
    })
    /*
    this.activatedRoute.params.subscribe(params =>{
      this.model.id= params.id;
    })*/

  }

  saveChanges( skill:skillCreationDTO){  
    console.log(skill);
    this.skillsService.edit(this.model.id, skill).subscribe(()=> {
      this.router.navigate(['/skills']);
    });

    
    
  }

}
