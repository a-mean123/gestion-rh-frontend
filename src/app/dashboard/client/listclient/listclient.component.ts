import { Component, OnInit } from '@angular/core';
import { DataclientService } from 'src/app/services/dataclient.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-listclient',
  templateUrl: './listclient.component.html',
  styleUrls: ['./listclient.component.css']
})
export class ListclientComponent implements OnInit {

  clients : any;

  constructor( private data: DataclientService ) { }

  ngOnInit(): void {

    this.data.getall()
      .subscribe(
        res=>{
          this.clients = res;
          console.log(this.clients);
          
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

            );


      }
    })



  }



}
