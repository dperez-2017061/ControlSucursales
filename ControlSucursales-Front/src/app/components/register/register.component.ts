import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnterpriseModel } from 'src/app/models/enterprise.model';
import { EnterpriseRestService } from 'src/app/services/enterpriseRest/enterprise-rest.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  enterprise: EnterpriseModel;
  timer:any;
  confirmPass:string = '';
  pass = '';

  constructor(
    private enterpriseRest: EnterpriseRestService,
    private router: Router
  ) {
    this.enterprise = new EnterpriseModel('','','','','');
   }

  ngOnInit(): void {
  }

  async checkPass(){
    clearTimeout(this.timer);
    this.timer = await setTimeout(()=>{
      if(this.confirmPass != this.enterprise.password){
        alert('Password doesnt match');
        clearTimeout(this.timer);
        this.pass = '';
      }else{
        alert('Password match');
        clearTimeout(this.timer);
        this.pass = 'as';
      }
    }, 1000)
  }

  createEnterprise(registerForm:any){
  this.enterpriseRest.createEnterprise(this.enterprise).subscribe({
    next: (res:any)=>{
      alert(res.message);
      return this.router.navigateByUrl('login');
    },
    error: (err)=>{
      registerForm.reset();
      return alert(err.error.message || err.error);
    }
  })
  }

}
