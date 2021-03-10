import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { FooterComponent } from './footer/footer.component'

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
