import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnterpriseModel } from 'src/app/models/enterprise.model';
import { EnterpriseRestService } from 'src/app/services/enterpriseRest/enterprise-rest.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  enterprise: EnterpriseModel;

  constructor(
    private enterpriseRest: EnterpriseRestService,
    public router:Router
  ) {
    this.enterprise = new EnterpriseModel('','','','','')
   }

  ngOnInit(): void {
  }
  
  login(){
    this.enterpriseRest.login(this.enterprise).subscribe({
      next: (res:any)=>{
        alert(res.message);
        localStorage.setItem('token', res.token);
        localStorage.setItem('identity', JSON.stringify(res.enterprise));
      },
      error: (err)=> alert(err.error.message || err.error)
    })
  }

}
