import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatadepService } from 'src/app/services/datadep.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  constructor(private data: DatadepService, private router: Router) { }

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

          this.router.navigate(['/dashboard/departement/list'])
    
        }
      );

  }


  ngOnInit(): void {
  }

}
