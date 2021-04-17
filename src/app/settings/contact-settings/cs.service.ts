import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contactDTO } from 'src/app/contact/contact.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CsService {

  constructor(private http: HttpClient) { }
  private apiURL=environment.apiURL+'/contacts';

  get():Observable<contactDTO>{
    return this.http.get<contactDTO>(this.apiURL);
  }

  edit(contactDTO:contactDTO){
    return this.http.put(this.apiURL, contactDTO);
  }
}
