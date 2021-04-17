import { animate, style, transition, trigger } from '@angular/animations';
import { formatCurrency } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { messageCreatingDTO } from '../contact.model';
import { ContactService } from '../contact.service';
import { FormContactComponent } from '../form-contact/form-contact.component';

@Component({
  selector: 'app-index-contact',
  templateUrl: './index-contact.component.html',
  styleUrls: ['./index-contact.component.css'],
  animations: [
    trigger('modal', [
      transition(
        ":enter", [style({opacity:0}),
        animate('0.2s ease-out', style({opacity: 1}))]
        ),
        transition(
          ":leave", [style({opacity:1}),
          animate('0.2s ease-out', style({opacity: 0}))]
          )
      ]
      )
    
  ]
})
export class IndexContactComponent implements OnInit {

  constructor(private contactService:ContactService) { }

  @ViewChild('form')
  form:FormContactComponent;
  modal:boolean=false;

  ngOnInit(): void {
  }

  send(messageCreatingDTO:messageCreatingDTO){
    this.contactService.create(messageCreatingDTO).subscribe(()=>{
      this.form.clearForm();
      this.modal=true;
    });
  }

}
