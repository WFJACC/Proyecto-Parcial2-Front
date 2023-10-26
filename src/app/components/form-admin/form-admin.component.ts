import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.css']
})
export class FormAdminComponent implements OnInit{
  forms!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, public dialogRef: MatDialogRef<FormAdminComponent>){
    
  }
  ngOnInit(): void {

  }

  datosFormulario() {
    console.log(this.forms);
    if (this.forms.valid) {
      Swal.fire('¡Registro Exitoso!', 'Sus datos han sido registrados con éxito', 'success');
      // Aquí puedes enviar los datos del formulario al servidor o realizar otras operaciones.
    } else {
      Swal.fire('Error de Validación', 'Por favor complete todos los campos correctamente', 'error');
    }
  }

  cancelar(){
    this.dialogRef.close()
  }
}



