import { Component, OnInit } from '@angular/core';
import { skillDTO } from '../skills.models';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-index-skills',
  templateUrl: './index-skills.component.html',
  styleUrls: ['./index-skills.component.css']
})
export class IndexSkillsComponent implements OnInit {

  constructor(private skillsService:SkillsService) { }

  columnsToDisplay=['name','actions'];
  skills;

  ngOnInit(): void {
    this.LoadData();
    
  }

  private LoadData(){
    this.skillsService.getAll().subscribe(skills => {
       this.skills=skills;
    });

    
  }

  delete(id:number){
      this.skillsService.delete(id).subscribe(()=>{
        this.LoadData();
      });
  }

}
