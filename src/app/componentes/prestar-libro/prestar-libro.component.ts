import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/interfaces/libros';
import { prestamoLib } from 'src/app/interfaces/prestamolib';

@Component({
  selector: 'app-prestar-libro',
  templateUrl: './prestar-libro.component.html',
  styleUrls: ['./prestar-libro.component.css']
})
export class PrestarLibroComponent implements OnInit {

  prestamoLib: prestamoLib[] = [
    {
      ISBN: '12345645',
      nombre: 'Angeles caidos',
      fecha: new Date(),
      duracion: '5 dias',
      nombrepres: 'antonio velas'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
