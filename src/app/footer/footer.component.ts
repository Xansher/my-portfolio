import { Component, OnInit } from '@angular/core';
import { footerNav, Labels } from './footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  footerNav:footerNav;
  labels: Labels;

  ngOnInit(): void {
    if(localStorage.getItem('lang')=="english"){
      this.footerNav= {about: 'About me', contact: 'Contact', portfolio: 'Portfolio'};
      this.labels= {explore: 'Explore', social: 'Social', contact: 'Contact', contactText: 'Fell free to contact me by email or page.'};
    }
    if(localStorage.getItem('lang')=="polish"){
      this.footerNav= {about: 'O mnie', contact: 'Kontakt', portfolio: 'Portfolio'};
      this.labels= {explore: 'Zobacz', social: 'Media', contact: 'Kontakt', contactText:'Kontaktuj się poprzez mail lub formularz.'};
    }
  }

}
