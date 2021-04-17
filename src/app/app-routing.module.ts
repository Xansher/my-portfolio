import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './aboutme/experience/experience.component';
import { AboutMeResolverService } from './aboutme/index-aboutme/aboutme.resolver';
import { IndexAboutmeComponent } from './aboutme/index-aboutme/index-aboutme.component';
import { IndexContactComponent } from './contact/index-contact/index-contact.component';
import { CreateExperienceComponent } from './experience/create-experience/create-experience.component';
import { EditExperienceResolverResolver } from './experience/edit-experience/edit-experience-resolver.resolver';
import { EditExperienceComponent } from './experience/edit-experience/edit-experience.component';
import { ExperiencesResolverService } from './experience/experiences.resolver';
import { IndexExperienceComponent } from './experience/index-experience/index-experience.component';
import { HomeResolverService } from './home/home-resolver.service';
import { HomeComponent } from './home/home.component';
import { AboutmeAboutmeSettingsComponent } from './settings/aboutme-aboutme-settings/aboutme-aboutme-settings.component';
import { AboutmeSettingsComponent } from './settings/aboutme-settings/aboutme-settings.component';
import { ContactSettingsComponent } from './settings/contact-settings/contact-settings.component';
import { HomeSettingsComponent } from './settings/home-settings/home-settings.component';
import { IndexSettingsComponent } from './settings/index-settings/index-settings.component';
import { CreateSkillComponent } from './skills/create-skill/create-skill.component';
import { EditSkillComponent } from './skills/edit-skill/edit-skill.component';
import { ResolverService } from './skills/edit-skill/resolver.service';
import { IndexSkillsComponent } from './skills/index-skills/index-skills.component';

const routes: Routes = [
  {path: '', component: HomeComponent, resolve: {home: HomeResolverService},data: {animation: 'HomePage'}},
  {path: 'aboutme', component: IndexAboutmeComponent, resolve:{experiences: ExperiencesResolverService, about: AboutMeResolverService}, data: {animation: 'AboutPage'}},
  {path: 'contact', component: IndexContactComponent, data: { animation: 'ContactPage'}},
  {path: 'settings', component:IndexSettingsComponent, 
    children:[
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {
        path:'home',
        component: HomeSettingsComponent,
        
      },
      {
        path: 'aboutme',
        component: AboutmeSettingsComponent,
        
        children:[
          {path: '', redirectTo: 'aboutme', pathMatch: 'full'},
          {path: 'aboutme', component: AboutmeAboutmeSettingsComponent},
          {path: 'skills', component: IndexSkillsComponent}, 
          {path: 'skills/edit/:id', component: EditSkillComponent, resolve:{skill: ResolverService} },
          {path: 'skills/create', component: CreateSkillComponent},
          {path: 'experience', component: IndexExperienceComponent},
          {path: 'experience/create', component: CreateExperienceComponent},
          {path: 'experience/edit/:id', component: EditExperienceComponent, resolve: {experience: EditExperienceResolverResolver}}
          
        ]
      },
      {path: 'contact', component: ContactSettingsComponent},
    ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
