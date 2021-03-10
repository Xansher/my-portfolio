import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { skillCreationDTO} from '../skills.models';

@Component({
  selector: 'app-form-skill',
  templateUrl: './form-skill.component.html',
  styleUrls: ['./form-skill.component.css']
})
export class FormSkillComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  form:FormGroup;

  @Input()
  model: skillCreationDTO;

  @Input()
  label='label';

  @Output()
  onSaveChanges = new EventEmitter<skillCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      description: '',
      icon: ''
    });
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  changeMarkdown(content:string){
    this.form.get('description').setValue(content);
  }

  onImageSelected(icon){
    this.form.get('icon').setValue(icon);
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

}
