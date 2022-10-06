import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  listaUsuarios: Usuarios[] = [
    {
      nombre: 'Jose',
      apellido: 'Andrade',
      celular: '3215765864',
      correo: 'joseandrade4@gmail.com'
    },
    {
      nombre: 'Camila',
      apellido: 'anacleta',
      celular: '3116287790',
      correo: 'camilaana090@gmail.com'
    },
    {
      nombre: 'Mario',
      apellido: 'Daniel',
      celular: '3125765000',
      correo: 'marioDan4@gmail.com'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
