import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { experienceDTO } from '../experience.model';
import { ExperienceService } from '../experience.service';

@Injectable({
  providedIn: 'root'
})
export class EditExperienceResolverResolver implements Resolve<experienceDTO> {
  constructor(private experienceService:ExperienceService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): experienceDTO | Observable<experienceDTO> | Promise<experienceDTO> {
    return this.experienceService.getById(route.params.id);
  }
}
