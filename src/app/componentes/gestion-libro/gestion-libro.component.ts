import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/interfaces/libros';

@Component({
  selector: 'app-gestion-libro',
  templateUrl: './gestion-libro.component.html',
  styleUrls: ['./gestion-libro.component.css']
})
export class GestionLibroComponent implements OnInit {
 listaLibro: Libro[] = [
    {
      ISBN: '12345645',
      titulo: 'Angeles caidos',
      autor: 'Anonimo',
      editorial: 'Alfaguara',
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
