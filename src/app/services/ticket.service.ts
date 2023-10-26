import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Ticket } from '../interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private myAppUrl: string;
  private adminApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.adminApiUrl = 'api/tickets'
  }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.myAppUrl}${this.adminApiUrl}`);
  }
}
