import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatadepService } from 'src/app/services/datadep.service';
import { DataemployeeService } from 'src/app/services/dataemployee.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ajoutemployee',
  templateUrl: './ajoutemployee.component.html',
  styleUrls: ['./ajoutemployee.component.css']
})
export class AjoutemployeeComponent implements OnInit {

  constructor(  
    private datadep: DatadepService , 
    private dataemp: DataemployeeService,
    private router: Router
    ) { }

  departements: any;

  employee = {
    name: '',
    lastname: '',
    email:'',
    tel: '',
    address:'',
    idDep: ''
  }

  photo: any;

  select(e:any){
    this.photo = e.target.files[0];

  }

  ajout(){
    
    let form = new FormData();
    form.append('name', this.employee.name);
    form.append('lastname', this.employee.lastname);
    form.append('email', this.employee.email);
    form.append('tel', this.employee.tel);
    form.append('address', this.employee.address);
    form.append('idDep', this.employee.idDep);
    form.append('image', this.photo);


    this.dataemp.create(form)
      .subscribe(
        res=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your employee has been saved',
            showConfirmButton: false,
            timer: 1500
          })

          this.router.navigate(['/dashboard/employee/list']);
          
        }
      );



    
  }


  ngOnInit(): void {

    this.datadep.getall()
      .subscribe(
        res=>{
          this.departements = res;
        }
      );

  }

}
