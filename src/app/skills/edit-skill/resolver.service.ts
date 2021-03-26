import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { skillDTO } from '../skills.models';
import { SkillsService } from '../skills.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Observable<skillDTO>> {

  constructor(private skillsService:SkillsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<skillDTO> | Observable<Observable<skillDTO>> | Promise<Observable<skillDTO>> {
    return this.skillsService.getById(route.params['id']);
  }
  
}
