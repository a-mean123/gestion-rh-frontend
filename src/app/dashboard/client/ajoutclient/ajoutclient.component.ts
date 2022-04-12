import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataclientService } from 'src/app/services/dataclient.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-ajoutclient',
  templateUrl: './ajoutclient.component.html',
  styleUrls: ['./ajoutclient.component.css']
})
export class AjoutclientComponent implements OnInit {

  client = {

    name:'',
    description:'',
    entreprise:'',
    titreprojet:''

  }

  myPhoto: any;

  selectionnerImage(e:any){

    this.myPhoto = e.target.files[0];

  }

  ajouter(){
    let formdata = new FormData();
    formdata.append('name' , this.client.name);
    formdata.append('description' , this.client.description);
    formdata.append('entreprise' , this.client.entreprise);
    formdata.append('titreprojet' , this.client.titreprojet);
    formdata.append('image' , this.myPhoto);

    this.data.create(formdata)
      .subscribe(
        res=>{
          
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your client has been saved',
            showConfirmButton: false,
            timer: 1500
          })

          this.router.navigate(['/dashboard/client'])

        }
      );

  }

  constructor(private data: DataclientService, private router: Router) { }

  ngOnInit(): void {
  }

}
