import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {
  forms!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, public dialogRef: MatDialogRef<VistaComponent>){
    this.forms = this.fb.group({
      titular:['', [Validators.required, Validators.minLength(10)]],
      curp:['', [Validators.required, Validators.pattern(/^([a-zA-Z]{4})(\d{6})([a-zA-Z]{6})(\d{2})$/)]],
      nombre:['', Validators.required],
      paterno:['', Validators.required],
      materno:['', Validators.required],
      telefono:['', Validators.required],
      celular:['', Validators.required],
      correo:['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      nivel:['', Validators.required],
      municipio:['', Validators.required],
      asunto:['', Validators.required]
    })
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
    this.dialogRef.close();
  }
}

