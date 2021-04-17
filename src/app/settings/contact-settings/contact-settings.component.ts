import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { contactDTO } from 'src/app/contact/contact.model';
import { CsService } from './cs.service';

@Component({
  selector: 'app-contact-settings',
  templateUrl: './contact-settings.component.html',
  styleUrls: ['./contact-settings.component.css']
})
export class ContactSettingsComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private cs: CsService) { }

  form:FormGroup;
  model:contactDTO;
  modal:boolean=false;
  
  ngOnInit(): void {
    this.form= this.formBuilder.group({
      linkedin: '',
      github: '',
      instagram: '',
      email: ''
    });
    
    this.cs.get().subscribe(contact=>{
      this.model=contact;
      if(this.model!= undefined){
        this.form.patchValue(this.model);
      }
    });

  }

  saveChanges(){
    this.cs.edit(this.form.value).subscribe(()=>{
      this.modal=true;
    });
  }
}
