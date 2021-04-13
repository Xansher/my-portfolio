import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { experienceDTO } from './experience.model';
import { ExperienceService } from './experience.service';


@Injectable({
  providedIn: 'root'
})
export class ExperiencesResolverService implements Resolve<experienceDTO[]> {

  constructor(private experienceService:ExperienceService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): experienceDTO[] | Observable<experienceDTO[]> | Promise<experienceDTO[]> {
    return this.experienceService.get();
  }

  
  
}
