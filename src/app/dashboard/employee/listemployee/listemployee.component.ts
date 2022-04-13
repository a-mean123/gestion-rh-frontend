import { Component, OnInit } from '@angular/core';
import { DataemployeeService } from 'src/app/services/dataemployee.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {

  constructor(private data: DataemployeeService) { }

  employees: any;

  ngOnInit(): void {

    this.data.getall()
      .subscribe(
        res=>{
          this.employees = res;
          console.log(this.employees);
          
        }
      );

  }


  delete(id:any){

     
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
