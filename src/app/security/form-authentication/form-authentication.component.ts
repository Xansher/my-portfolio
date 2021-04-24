import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userCredentials } from '../security.model';


@Component({
  selector: 'app-form-authentication',
  templateUrl: './form-authentication.component.html',
  styleUrls: ['./form-authentication.component.css']
})
export class FormAuthenticationComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  form:FormGroup;
  labels; 
  @Input()
  action;
  @Output()
  onSubmit= new EventEmitter<userCredentials>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    const lang=localStorage.getItem('lang');
    if(lang=="english"){
      this.labels={email: 'Email', emailError: 'Email is required', password: 'Password',  passwordError: 'Password is required'};
    }
    if(lang=="polish"){
      this.labels={email: 'Email', emailError: 'Email jest wymagany', password: 'Hasło', passwordError: 'Hasło jest wymagane'};
    }
  }

  handleSubmit(){
    this.onSubmit.emit(this.form.value);
  }

}
