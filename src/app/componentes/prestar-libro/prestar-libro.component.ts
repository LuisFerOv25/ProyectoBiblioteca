import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Libro } from 'src/app/interfaces/libros';
import { prestamoLib } from 'src/app/interfaces/prestamolib';

@Component({
  selector: 'app-prestar-libro',
  templateUrl: './prestar-libro.component.html',
  styleUrls: ['./prestar-libro.component.css']
})
export class PrestarLibroComponent implements OnInit {

  prestarLib: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.prestarLib=this.fb.group({
      cedula:['',Validators.required],
      nombre:['',Validators.required],
      correo:['',Validators.required],
      celular:['',Validators.required],
      isbn:['',Validators.required],
      fechapres:['',Validators.required],
      duracion:['',Validators.required]
    }
    )
  }

  ngOnInit(): void {
  }


  prestar(){
    console.log(this.prestarLib);
    const prestamo:prestamoLib={
      cedula: this.prestarLib.get('cedula')?.value,
      nombre: this.prestarLib.get('nombre')?.value,
      correo: this.prestarLib.get('correo')?.value,
      celular: this.prestarLib.get('celular')?.value,
      isbn: this.prestarLib.get('isbn')?.value,
      fechapres: this.prestarLib.get('fechapres')?.value,
      duracion: this.prestarLib.get('duracion')?.value,
    }
    console.log(prestamo);
  }

}
