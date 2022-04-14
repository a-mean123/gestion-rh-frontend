import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {


  constructor( private auth: AuthService, private router: Router ){

  }

  canActivate(){

    if (this.auth.isLoggedIn() == true){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false
    }

  }
  
}
