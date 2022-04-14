import { Component, OnInit } from '@angular/core';
import { DatadepService } from 'src/app/services/datadep.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listdep',
  templateUrl: './listdep.component.html',
  styleUrls: ['./listdep.component.css']
})
export class ListdepComponent implements OnInit {

  constructor(private data: DatadepService) { }

  departements:any;

  ngOnInit(): void {

    this.data.getall()
      .subscribe(
        res=>{
          this.departements = res;
        },
        err=>{
          
        }
      );

  }

  delete(id: any){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
     
        this.data.supprimer(id)
          .subscribe(
            res=>{
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              this.ngOnInit();
            }
          )


      }
    })

  }

}
