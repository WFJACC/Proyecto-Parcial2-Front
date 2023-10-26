import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Ticket } from 'src/app/interfaces/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { MatDialog } from '@angular/material/dialog';
import { VistaComponent } from '../vista/vista.component';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent {
  ngOnInit(): void {
    this.obtenerTickets();
  }
  nombreColumnas: { [key: string]: string } = {
    'idTicket': 'ID del Ticket',
    'nombreTitular': 'Nombre del Titular',
    'celular': 'Celular',
    'telefono': 'Teléfono',
    'correo': 'Correo Electrónico',
    'curpAlumno': 'CURP del Alumno',
    'nombreAlumno': 'Nombre del Alumno',
    'maternoAlumno': 'Apellido Materno del Alumno',
    'paternoAlumno': 'Apellido Paterno del Alumno',
    'asunto': 'Asunto',
    'status': 'Estado',
    'nombreMunicipio': 'Nombre del Municipio',
    'acciones': 'Acciones'
  };
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['idTicket', 'nombreTitular', 'celular', 'telefono', 'correo', 'curpAlumno',
   'nombreAlumno', 'maternoAlumno', 'paternoAlumno', 'asunto', 'status', 'nombreMunicipio', 'acciones']
  dataSource = new MatTableDataSource<Ticket>();
  

  constructor(private _ticketService: TicketService, public dialog: MatDialog){
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = 
    this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obtenerTickets(){
    this._ticketService.getTickets().subscribe(data =>{
      console.log(data);
      this.dataSource.data = data;
    })
  }

  editInsert(){
    const dialogRef = this.dialog.open(VistaComponent, {

    });
  }
  
}
