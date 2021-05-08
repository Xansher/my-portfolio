import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
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
  skills:skillDTO[];

  @ViewChild(MatTable) table: MatTable<any>;
  
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
  dropped(event: CdkDragDrop<any[]>){
    const previousIndex=this.skills.findIndex(skill => skill=== event.item.data);
    moveItemInArray(this.skills, previousIndex, event.currentIndex);
    this.table.renderRows();
    this.saveOrders();
  }

  saveOrders(){
    const orders=this.skills.map( (value, key)=> {
      return{skillId: value.id, order:key}
    });

    this.skillsService.saveOrders(orders).subscribe(()=> {});
  }

}
