import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataclientService } from 'src/app/services/dataclient.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements OnInit {

  id: any;
  client: any;

  constructor( 

    private actRoute: ActivatedRoute,
    private data: DataclientService,
    private router: Router

   ) { }

   photo: any;
   
   selectionnerImage(e:any){
     this.photo = e.target.files[0];
   }


  ngOnInit(): void {

    this.id = this.actRoute.snapshot.paramMap.get('id');

    this.data.getbyid(this.id)
      .subscribe(
        res=>{
          this.client = res;
        }
      );

  }


  update(){

    let formdata = new FormData();
    formdata.append('name' , this.client.name);
    formdata.append('description' , this.client.description);
    formdata.append('entreprise' , this.client.entreprise);
    formdata.append('titreprojet' , this.client.titreprojet);
    if(this.photo){
      formdata.append('image' , this.photo);
    }else{
      formdata.append('image' , this.client.image);
    }


    this.data.update(this.id , formdata)
      .subscribe(
        res=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your client has been updated',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/dashboard/client/list']);
        }
      );


  }

}
