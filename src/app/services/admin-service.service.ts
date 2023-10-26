import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Admin } from '../interfaces/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private myAppUrl: string;
  private adminApiUrl: string;
  private oneUrl: string;
  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.adminApiUrl = 'api/admins/'
    this.oneUrl = 'api/admins/one/'
  }

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.myAppUrl}${this.adminApiUrl}`);
  }

  login(usuario: string, contrasena: string): Observable<any> {
    // Asegúrate de manejar los parámetros de la solicitud GET correctamente en tu backend
    // Si es necesario, envía los datos como parte de la URL o en los parámetros de la solicitud
    return this.http.get<any>(`${this.myAppUrl}${this.oneUrl}?usuario=${usuario}&contrasena=${contrasena}`);
  }
}