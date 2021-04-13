import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AboutmeService } from './aboutme.service';

@Component({
  selector: 'app-aboutme-aboutme-settings',
  templateUrl: './aboutme-aboutme-settings.component.html',
  styleUrls: ['./aboutme-aboutme-settings.component.css']
})
export class AboutmeAboutmeSettingsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private aboutmeService:AboutmeService) { }
  
  
  model;
  form:FormGroup;

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      englishDescription: '',
      polishDescription: '',
      photo: ''
    });
    this.aboutmeService.get().subscribe( about => {
      this.model=about;
      if(this.model !== undefined){
        this.form.patchValue(this.model);
      }
    });
    
  }

  changeEnglishMarkdown(e){
    this.form.get('englishDescription').setValue(e);
  }
  changePolishMarkdown(e){
    this.form.get('polishDescription').setValue(e);
  }

  onImageSelected(photo){  
    this.form.get('photo').setValue(photo);

  }
  saveChanges(){
      
      this.aboutmeService.edit(this.form.value).subscribe(()=> {

      });
  }

}
