import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { messageCreatingDTO } from '../contact.model';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @ViewChild('formGroupDirective') formGroupDirective: FormGroupDirective;

  form:FormGroup;
  @Output()
  onSend= new EventEmitter<messageCreatingDTO>();

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      messageContent: ['', Validators.required]
    })
  }

  send(){

    this.onSend.emit(this.form.value);
  }
  clearForm(){
    this.formGroupDirective.resetForm();
  }

}
