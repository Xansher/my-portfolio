import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HomeCreationDTO, HomeDTO, HomePutDTO } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiURL=environment.apiURL+'/homes';
  constructor(private http:HttpClient) { }

  get(id:number):Observable<HomeDTO>{
    return this.http.get<HomeDTO>(this.apiURL+`/${id}`);
  }

  edit(homeCreationDTO:HomeCreationDTO){
    const form=this.buildFormData(homeCreationDTO);
    return this.http.put(this.apiURL, form);
  }

  getEdit(){
    return this.http.get<HomePutDTO>(this.apiURL+'/putget');
  }
  
  private buildFormData(home:HomeCreationDTO):FormData {
    const formData = new FormData();
    formData.append('EnglishLabel', home.englishLabel);
    formData.append('EnglishText', home.englishText);
    formData.append('EnglishUnderText', home.englishUnderText);
    formData.append('PolishLabel', home.polishLabel);
    formData.append('PolishText', home.polishText);
    formData.append('PolishUnderText', home.polishUnderText);
    if(home.image){
      formData.append('Image', home.image);
    }
    if(home.photo){
      formData.append('Photo', home.photo);
    }

    return formData;

  }

}
