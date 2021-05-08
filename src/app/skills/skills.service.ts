import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { skillDTO, skillCreationDTO } from './skills.models';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http:HttpClient) { }

  private apiURL=environment.apiURL+'/skills';


  getAll(): Observable<skillDTO[]>{
    return this.http.get<skillDTO[]>(this.apiURL);
  }

  getById(id:number): Observable<skillDTO>{
    return this.http.get<skillDTO>(this.apiURL+`/${id}`);
  }

  create(skill:skillCreationDTO){
    const formData=this.buildFormData(skill);
    return this.http.post(this.apiURL, formData);
  }

  edit(id:number, skill:skillCreationDTO){
    const formData=this.buildFormData(skill);
    return this.http.put(this.apiURL+ `/${id}`, formData);
  }

  delete(id:number){
    return this.http.delete(this.apiURL+`/${id}`);
  }

  saveOrders(order){
    return this.http.put(this.apiURL+'/order', order);
  }


  private buildFormData(skill:skillCreationDTO):FormData {
    const formData = new FormData();
    formData.append('name',skill.name);
    if (skill.englishDescription) {
      formData.append('englishDescription',skill.englishDescription);
    }
    if (skill.polishDescription) {
      formData.append('polishDescription',skill.polishDescription);
    }
    if(skill.icon){
      formData.append('icon', skill.icon);
    }

    return formData;

  }

}
