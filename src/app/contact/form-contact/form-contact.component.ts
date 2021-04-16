import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contactSendingDTO } from '../contact.model';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form:FormGroup;
  @Output()
  onSend= new EventEmitter<contactSendingDTO>();

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required]
    })
  }

  send(){

    this.onSend.emit(this.form.value);
  }

}
