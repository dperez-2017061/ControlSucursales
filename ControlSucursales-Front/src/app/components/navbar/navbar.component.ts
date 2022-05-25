import { Component, OnInit } from '@angular/core';
import { EnterpriseRestService } from 'src/app/services/enterpriseRest/enterprise-rest.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token:any;
  role:any;
  identity:any;

  constructor(
    public enterpriseRest: EnterpriseRestService
  ) { }

  ngOnInit(): void {
    this.token = this.enterpriseRest.getToken();
    this.role = this.enterpriseRest.getIdentity().role;
    this.identity = this.enterpriseRest.getIdentity();
  }

}
