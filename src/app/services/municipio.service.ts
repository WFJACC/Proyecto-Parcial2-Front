import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Municipio } from '../interfaces/municipio';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {
  private myAppUrl: string;
  private adminApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.adminApiUrl = 'api/municipios'
  }

  getMunicipios(): Observable<Municipio[]> {
    return this.http.get<Municipio[]>(`${this.myAppUrl}${this.adminApiUrl}`);
  }
}
