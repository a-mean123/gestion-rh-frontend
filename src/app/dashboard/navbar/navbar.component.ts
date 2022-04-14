import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  adminData: any;

  ngOnInit(): void {

    this.adminData =  this.auth.getAdminDataFromToken();

  }

}
