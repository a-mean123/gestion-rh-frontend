import { Component, OnInit } from '@angular/core';
import { DatadepService } from 'src/app/services/datadep.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  constructor(private data: DatadepService) { }

  departement = {

    name: '',
    description: '',
    etage: '',
    salle:''

  }

  ajouter(){

    this.data.create(this.departement)
      .subscribe(
        res=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your dep has been saved',
            showConfirmButton: false,
            timer: 1500
          })

          this.departement = {

            name: '',
            description: '',
            etage: '',
            salle:''
        
          }
        }
      );

  }


  ngOnInit(): void {
  }

}
