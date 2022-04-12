import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatadepService } from 'src/app/services/datadep.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-updatedep',
  templateUrl: './updatedep.component.html',
  styleUrls: ['./updatedep.component.css']
})
export class UpdatedepComponent implements OnInit {

  id: any;
  departement: any;

  constructor( private activatedRoute: ActivatedRoute , 
               private data: DatadepService ,
               private router: Router
    ) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.data.getbyid(this.id)
      .subscribe(
        res=>{
          this.departement = res;
          console.log(this.departement);
          
        }
      );


  }

  update(){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to update this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then((result) => {
      if (result.isConfirmed) {
      
        this.data.update( this.id , this.departement )
          .subscribe(
            res=>{
              this.router.navigate(['/dashboard/departement/list']);
            }
          )

      }
    })

  }


}
