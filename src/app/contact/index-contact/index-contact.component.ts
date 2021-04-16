import { Component, OnInit } from '@angular/core';
import { messageCreatingDTO } from '../contact.model';

@Component({
  selector: 'app-index-contact',
  templateUrl: './index-contact.component.html',
  styleUrls: ['./index-contact.component.css']
})
export class IndexContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  send(messageCreatingDTO:messageCreatingDTO){
    console.log(messageCreatingDTO);
    
  }

}
