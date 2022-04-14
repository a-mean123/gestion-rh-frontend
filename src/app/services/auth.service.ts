import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/admin/';


  register(admin: any){

    return this.http.post(this.url + 'register' , admin);

  }


  login(admin: any){

    return this.http.post(this.url + 'login' , admin);

  }


  isLoggedIn(){

    let token = localStorage.getItem('token');

    if(token){
      return true
    }else{
      return false;
    }

  }

  getAdminDataFromToken(){
    // aaeazeazeazeazea.azeazeazeaze.azedqsdqsdqsdqsdqsd
    let token = localStorage.getItem('token');
    if(token){
      let data = JSON.parse( window.atob(token.split('.')[1] ))
      return data;
      
    }


  }

}
