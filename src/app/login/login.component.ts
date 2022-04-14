import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin = {
    email:'',
    password:''
  }

  constructor( private auth: AuthService, private router: Router ) { }

  token: any;
  login(){

    this.auth.login(this.admin)
      .subscribe(
        res=>{
          this.token = res;
          // { mytoken: 'ddddddd' }

          localStorage.setItem('token' , this.token.mytoken);
          this.router.navigate(['/dashboard']);
          
        },
        err=>{
          console.log(err);
          
        }
      );

  }

  ngOnInit(): void {
  }

}
