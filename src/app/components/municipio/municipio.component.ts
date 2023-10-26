import { Component, OnInit , ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Municipio } from 'src/app/interfaces/municipio';
import { MunicipioService } from 'src/app/services/municipio.service';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.css']
})
export class MunicipioComponent implements OnInit{
  ngOnInit(): void {
    this.obtenerMunicipio();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'municipio', 'acciones'];
  dataSource = new MatTableDataSource<Municipio>();


  constructor(private _municipioService: MunicipioService){
    
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

  obtenerMunicipio(){
    this._municipioService.getMunicipios().subscribe(data =>{
      console.log(data);
      this.dataSource.data = data;
    })
  }

}
