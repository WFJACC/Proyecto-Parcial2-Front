import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Admin } from 'src/app/interfaces/admin'
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { MatDialog } from '@angular/material/dialog';
import { FormAdminComponent } from '../form-admin/form-admin.component';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit{
  ngOnInit(): void {
    this.obtenerAdmins();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['usuario', 'contraseña', 'acciones'];
  dataSource = new MatTableDataSource<Admin>();


  constructor(private _adminService: AdminServiceService, public dialog: MatDialog){
    
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

  obtenerAdmins(){
    this._adminService.getAdmins().subscribe(data =>{
      console.log(data);
      this.dataSource.data = data;
    })
  }

  editInsert(){
    const dialogRef = this.dialog.open(FormAdminComponent, {

    });
  }
}
