import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { experienceDTO } from '../experience.model';
import { AppDateAdapter } from './adapter';

export const APP_DATE_FORMATS =
{
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};

@Component({
  selector: 'app-form-experience',
  templateUrl: './form-experience.component.html',
  styleUrls: ['./form-experience.component.css'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
  }
  ]
})
export class FormExperienceComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  form:FormGroup;
  @Input()
  model:experienceDTO;

  @Output()
  onSaveChanges = new EventEmitter<experienceDTO>();

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: '',
      position: ['', Validators.required],
      company: ['', Validators.required],
      englishDuties: '',
      polishDuties: ''
    });
    if(this.model!= null){
      this.form.patchValue(this.model);
    }

  }


  chosenMonthHandler(event, picker){
    if(picker.id=="mat-datepicker-0"){
      this.form.get('startDate').setValue(event)
    }
    if(picker.id=="mat-datepicker-1"){
      this.form.get('endDate').setValue(event)
    }
    picker.close();
    
  }

  changeEnglishMarkdown(e){
    this.form.get('englishDuties').setValue(e);
  }
  changePolishMarkdown(e){
    this.form.get('polishDuties').setValue(e);
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

}
