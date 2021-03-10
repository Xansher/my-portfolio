import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { skillDTO } from '../skills.models';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  

  model:skillDTO= {id:1, name: 'Angular', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png', description: '# siema'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.model.id= params.id;
    })
  }

}
