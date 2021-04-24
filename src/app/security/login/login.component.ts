import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { userCredentials } from '../security.model';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private securityService: SecurityService, private router: Router) { }

  errors: string[] =[];

  ngOnInit(): void {
  }

  login(userCredentials:userCredentials){
    this.securityService.login(userCredentials).subscribe( response => { 
      this.securityService.saveToken(response);
      this.router.navigate(['/']);      
    }, error => {
      this.errors=parseWebAPIErrors(error);
    });
  }
}
