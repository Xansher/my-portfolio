import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeCreationDTO, HomePutDTO } from 'src/app/home/home.model';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-home-settings',
  templateUrl: './home-settings.component.html',
  styleUrls: ['./home-settings.component.css']
})
export class HomeSettingsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private homeService:HomeService) { }

  model:HomePutDTO;

  form:FormGroup;

  ngOnInit(): void {
    this.homeService.getEdit().subscribe(home=>{
      this.model=home;
      if(this.model != undefined){
        this.form.patchValue(this.model);
      }
    })

    this.form=this.formBuilder.group({
      englishLabel: '',
      englishText: '',
      englishUnderText: '',
      polishLabel: '',
      polishText: '',
      polishUnderText: '',
      image: '',
      photo: ''
    });
    

  }

  onImageSelected(image){
    this.form.get('image').setValue(image);
  }
  onPhotoSelected(photo){
    this.form.get('photo').setValue(photo);
  }

  saveChanges(){
   console.log(this.form.value);
   this.homeService.edit(this.form.value).subscribe(()=>{});
  }
}
