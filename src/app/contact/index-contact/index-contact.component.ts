import { animate, style, transition, trigger } from '@angular/animations';
import { formatCurrency } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CsService } from 'src/app/settings/contact-settings/cs.service';
import { contactDTO, messageCreatingDTO } from '../contact.model';
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

  constructor(private contactService:ContactService, private cs:CsService) { }

  @ViewChild('form')
  form:FormContactComponent;
  modal:boolean=false;
  model;
  contact:contactDTO={id: 1, linkedin:'', github: '', instagram: '', email: ''};


  ngOnInit(): void {
    const lang=localStorage.getItem('lang');
    if(lang=="english"){
      this.model={label:'Contact', text: 'I will response!', underText:'Fell free to contact me by email or contact form.'}
    }
    if(lang=="polish"){
      this.model={label:'Kontakt', text: 'Na pewno odpowiem!', underText:'Zapraszam do kontaktu przez email lub formularz.'}
    }
    this.cs.get().subscribe(contact => {
      this.contact=contact;
    })
  }

  send(messageCreatingDTO:messageCreatingDTO){
    this.contactService.create(messageCreatingDTO).subscribe(()=>{
      this.form.clearForm();
      this.modal=true;
    });
  }

}
