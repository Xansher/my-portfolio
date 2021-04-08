import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {MaterialModule} from './material/material.module';
import { IndexAboutmeComponent } from './aboutme/index-aboutme/index-aboutme.component';
import { IndexSkillsComponent } from './skills/index-skills/index-skills.component';
import { FormSkillComponent } from './skills/form-skill/form-skill.component';
import { CreateSkillComponent } from './skills/create-skill/create-skill.component';
import { EditSkillComponent } from './skills/edit-skill/edit-skill.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';
import {MarkdownModule} from 'ngx-markdown';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './utilities/logo/logo.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HomeSettingsComponent } from './settings/home-settings/home-settings.component';
import { IndexSettingsComponent } from './settings/index-settings/index-settings.component';
import { SliderComponent } from './utilities/slider/slider.component';
import { ExperienceComponent } from './aboutme/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    IndexAboutmeComponent,
    IndexSkillsComponent,
    FormSkillComponent,
    CreateSkillComponent,
    EditSkillComponent,
    InputImgComponent,
    InputMarkdownComponent,
    FooterComponent,
    LogoComponent,
    GenericListComponent,
    HomeSettingsComponent,
    IndexSettingsComponent,
    SliderComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
