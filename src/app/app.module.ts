import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { DepartementComponent } from './dashboard/departement/departement.component';
import { ClientComponent } from './dashboard/client/client.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { AjoutComponent } from './dashboard/departement/ajout/ajout.component';
import { ListdepComponent } from './dashboard/departement/listdep/listdep.component';
import { UpdatedepComponent } from './dashboard/departement/updatedep/updatedep.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AjoutclientComponent } from './dashboard/client/ajoutclient/ajoutclient.component';
import { ListclientComponent } from './dashboard/client/listclient/listclient.component';
import { UpdateclientComponent } from './dashboard/client/updateclient/updateclient.component';
import { AjoutemployeeComponent } from './dashboard/employee/ajoutemployee/ajoutemployee.component';
import { ListemployeeComponent } from './dashboard/employee/listemployee/listemployee.component';
import { UpdateemployeeComponent } from './dashboard/employee/updateemployee/updateemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DepartementComponent,
    ClientComponent,
    EmployeeComponent,
    AjoutComponent,
    ListdepComponent,
    UpdatedepComponent,
    AjoutclientComponent,
    ListclientComponent,
    UpdateclientComponent,
    AjoutemployeeComponent,
    ListemployeeComponent,
    UpdateemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
