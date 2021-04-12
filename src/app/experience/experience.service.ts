import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { experienceDTO, experienceCreationDTO} from './experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http:HttpClient) { }
  private apiURL=environment.apiURL+'/experiences';

  get():Observable<experienceDTO[]>{
    return this.http.get<experienceDTO[]>(this.apiURL);
  }

  getById(id):Observable<experienceDTO>{
    return this.http.get<experienceDTO>(this.apiURL+`/${id}`);
  }

  create(experienceCreationDTO:experienceCreationDTO){
    return this.http.post(this.apiURL, experienceCreationDTO);
  }
  edit(id:number, experienceCreationDTO:experienceCreationDTO){
    return this.http.put(`${this.apiURL}/${id}`, experienceCreationDTO);
  }
  delete(id:number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
    

}
