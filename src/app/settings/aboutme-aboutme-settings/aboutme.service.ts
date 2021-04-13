import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { aboutMeCreatingDTO, aboutMeDTO } from './aboutme.model';

@Injectable({
  providedIn: 'root'
})
export class AboutmeService {

  constructor(private http: HttpClient) { }
  private apiURL=environment.apiURL + '/aboutme';

  get():Observable<aboutMeDTO>{
    return this.http.get<aboutMeDTO>(this.apiURL);
  }
  edit(aboutme:aboutMeCreatingDTO){
    const form = this.buildFormData(aboutme);
    console.log(form);
    return this.http.put(this.apiURL, form);
  }

  buildFormData(aboutme:aboutMeCreatingDTO){
    const form= new FormData();
    form.append('englishDescription', aboutme.englishDescription);
    form.append('polishDescription', aboutme.polishDescription);
    if(aboutme.photo){
      form.append('photo', aboutme.photo);
    }
    return form;
  }


}
