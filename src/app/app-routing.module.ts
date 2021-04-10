import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexAboutmeComponent } from './aboutme/index-aboutme/index-aboutme.component';
import { HomeResolverService } from './home/home-resolver.service';
import { HomeComponent } from './home/home.component';
import { AboutmeAboutmeSettingsComponent } from './settings/aboutme-aboutme-settings/aboutme-aboutme-settings.component';
import { AboutmeSettingsComponent } from './settings/aboutme-settings/aboutme-settings.component';
import { HomeSettingsComponent } from './settings/home-settings/home-settings.component';
import { IndexSettingsComponent } from './settings/index-settings/index-settings.component';
import { CreateSkillComponent } from './skills/create-skill/create-skill.component';
import { EditSkillComponent } from './skills/edit-skill/edit-skill.component';
import { ResolverService } from './skills/edit-skill/resolver.service';
import { IndexSkillsComponent } from './skills/index-skills/index-skills.component';

const routes: Routes = [
  {path: '', component: HomeComponent, resolve: {home: HomeResolverService},data: {animation: 'HomePage'}},
  {path: 'aboutme', component: IndexAboutmeComponent, data: {animation: 'AboutPage'}},
  {path: 'settings', component:IndexSettingsComponent, 
    children:[
      {
        path:'home',
        component: HomeSettingsComponent,
        
      },
      {
        path: 'aboutme',
        component: AboutmeSettingsComponent,
        children:[
          {path: 'aboutme', component: AboutmeAboutmeSettingsComponent},
          {path: 'skills', component: IndexSkillsComponent}, 
          {path: 'skills/edit/:id', component: EditSkillComponent, resolve:{skill: ResolverService} },
          {path: 'skills/create', component: CreateSkillComponent}
          
        ]
      }
    ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
