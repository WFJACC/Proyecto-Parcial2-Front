import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormPublicoComponent } from './components/form-publico/form-publico.component';
import { LoginComponent } from './components/login/login.component';
import { FormAdminComponent } from './components/form-admin/form-admin.component';
import { ListTicketsComponent } from './components/list-tickets/list-tickets.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MunicipioComponent } from './components/municipio/municipio.component';
import { SharedModule } from 'src/shared/shared.module';
import { NarbarBasicoComponent } from './components/narbar-basico/narbar-basico.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminsComponent } from './components/admins/admins.component';
import { VistaComponent } from './components/vista/vista.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPublicoComponent,
    LoginComponent,
    FormAdminComponent,
    ListTicketsComponent,
    NavbarComponent,
    MunicipioComponent,
    NarbarBasicoComponent,
    AdminsComponent,
    VistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
