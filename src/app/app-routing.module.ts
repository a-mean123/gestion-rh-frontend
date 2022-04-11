import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './dashboard/client/client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjoutComponent } from './dashboard/departement/ajout/ajout.component';
import { DepartementComponent } from './dashboard/departement/departement.component';
import { ListdepComponent } from './dashboard/departement/listdep/listdep.component';
import { UpdatedepComponent } from './dashboard/departement/updatedep/updatedep.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
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


    { path: 'client' , component: ClientComponent },


    { path: 'employee' , component: EmployeeComponent  }


  ] },


 



  { path: 'login' , component: LoginComponent },

  { path: 'register', component: RegisterComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
