import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { messageCreatingDTO } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  apiURL=environment.apiURL+'/messages';

  create(messageCreatingDTO:messageCreatingDTO){
    return this.http.post(this.apiURL, messageCreatingDTO);
  }
}
