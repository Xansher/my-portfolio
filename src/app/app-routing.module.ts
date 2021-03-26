import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexAboutmeComponent } from './aboutme/index-aboutme/index-aboutme.component';
import { HomeComponent } from './home/home.component';
import { CreateSkillComponent } from './skills/create-skill/create-skill.component';
import { EditSkillComponent } from './skills/edit-skill/edit-skill.component';
import { ResolverService } from './skills/edit-skill/resolver.service';
import { IndexSkillsComponent } from './skills/index-skills/index-skills.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {animation: 'HomePage'}},
  {path: 'aboutme', component: IndexAboutmeComponent, data: {animation: 'AboutPage'}},
  {path: 'skills', component: IndexSkillsComponent},
  {path: 'skills/edit/:id', component: EditSkillComponent, resolve:{skill: ResolverService} },
  {path: 'skills/create', component: CreateSkillComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
