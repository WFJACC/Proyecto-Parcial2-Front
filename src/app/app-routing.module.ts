import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormPublicoComponent } from './components/form-publico/form-publico.component';
import { MunicipioComponent } from './components/municipio/municipio.component';
import { FormAdminComponent } from './components/form-admin/form-admin.component';
import { ListTicketsComponent } from './components/list-tickets/list-tickets.component';
import { AdminsComponent } from './components/admins/admins.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "formPublico",
    pathMatch: "full"
  },
  {
    path: "gestorAdmin",
    component: AdminsComponent
  },
  {
    path:"listTicket",
    component: ListTicketsComponent
  },
  {
    path: "formPublico",
    component: FormPublicoComponent,
  },  
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "municipio",
    component: MunicipioComponent
  },
  {
    path: "formAdmin",
    component: FormAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
