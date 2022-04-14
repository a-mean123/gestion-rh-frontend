import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  admin = {

    fullname: '',
    email: '',
    password: ''

  }

  register(){

    this.auth.register(this.admin)
      .subscribe(
        (res)=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your account has been created',
            showConfirmButton: false,
            timer: 1500
          })

          this.router.navigate(['/login']);
        },
        (err)=>{
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Email exist',
            showConfirmButton: false,
            timer: 1500
          })
          
        }
      );

  }

  constructor( private auth: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }

}
