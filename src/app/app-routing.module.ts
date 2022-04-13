import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutclientComponent } from './dashboard/client/ajoutclient/ajoutclient.component';
import { ClientComponent } from './dashboard/client/client.component';
import { ListclientComponent } from './dashboard/client/listclient/listclient.component';
import { UpdateclientComponent } from './dashboard/client/updateclient/updateclient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjoutComponent } from './dashboard/departement/ajout/ajout.component';
import { DepartementComponent } from './dashboard/departement/departement.component';
import { ListdepComponent } from './dashboard/departement/listdep/listdep.component';
import { UpdatedepComponent } from './dashboard/departement/updatedep/updatedep.component';
import { AjoutemployeeComponent } from './dashboard/employee/ajoutemployee/ajoutemployee.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { ListemployeeComponent } from './dashboard/employee/listemployee/listemployee.component';
import { UpdateemployeeComponent } from './dashboard/employee/updateemployee/updateemployee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  { path: '' , redirectTo: '/dashboard' , pathMatch: 'full' },

  { path: 'dashboard' , component: DashboardComponent , children: [

    { path: '' , redirectTo: 'departement' , pathMatch: 'full' },
    { path: 'departement' , component: DepartementComponent , children: [

      { path: '' , redirectTo: 'list' , pathMatch: 'full' },
      { path: 'ajout', component: AjoutComponent },
      { path: 'list' , component: ListdepComponent },
      { path: 'update/:id' , component: UpdatedepComponent  }

    ] },


    { path: 'client' , component: ClientComponent , children:[
      { path: '' , redirectTo: 'list' , pathMatch: 'full' },
      { path: 'ajout', component: AjoutclientComponent },
      { path: 'list' , component: ListclientComponent },
      { path: 'update/:id' , component: UpdateclientComponent }

    ] },


    { path: 'employee' , component: EmployeeComponent , children: [

      { path: '' , redirectTo: 'list', pathMatch: 'full' },
      { path: 'ajout', component: AjoutemployeeComponent },
      { path: 'list' , component: ListemployeeComponent },
      { path: 'update/:id' , component: UpdateemployeeComponent }

    ] }


  ] },


 



  { path: 'login' , component: LoginComponent },

  { path: 'register', component: RegisterComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
