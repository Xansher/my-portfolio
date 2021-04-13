import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { aboutMeDTO } from 'src/app/settings/aboutme-aboutme-settings/aboutme.model';
import { AboutmeService } from 'src/app/settings/aboutme-aboutme-settings/aboutme.service';


@Injectable({
  providedIn: 'root'
})
export class AboutMeResolverService implements Resolve<aboutMeDTO> {

  constructor(private aboutmeService:AboutmeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): aboutMeDTO | Observable<aboutMeDTO> | Promise<aboutMeDTO> {
    return this.aboutmeService.get();
  }

}