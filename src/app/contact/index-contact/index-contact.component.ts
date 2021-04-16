import { formatCurrency } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { messageCreatingDTO } from '../contact.model';
import { ContactService } from '../contact.service';
import { FormContactComponent } from '../form-contact/form-contact.component';

@Component({
  selector: 'app-index-contact',
  templateUrl: './index-contact.component.html',
  styleUrls: ['./index-contact.component.css']
})
export class IndexContactComponent implements OnInit {

  constructor(private contactService:ContactService) { }

  @ViewChild('form')
  form:FormContactComponent;


  ngOnInit(): void {
  }

  send(messageCreatingDTO:messageCreatingDTO){
    this.contactService.create(messageCreatingDTO).subscribe(()=>{
      this.form.clearForm();
    });
  }

}
