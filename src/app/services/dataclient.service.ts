import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataclientService {

  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/client/';

  create(client: any){

    return this.http.post( this.url + 'ajout' , client );

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

  update(id: any , client: any){

    return this.http.put( this.url + 'update/' + id  , client );

  }


}
