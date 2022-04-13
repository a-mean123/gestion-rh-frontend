import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataemployeeService {
  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/employee/';

  create(employee: any){

    return this.http.post( this.url + 'ajout' , employee );

  }

  getall(){

    return this.http.get( this.url + 'all'  );

  }

  getbyid(id: any){

    return this.http.get( this.url + 'getbyid/' + id  );

  }


  supprimer(id: any){

    return this.http.delete( this.url + 'supprimer/' + id  );

  }

  update(id: any , employee: any){

    return this.http.put( this.url + 'update/' + id  , employee );

  }
}
