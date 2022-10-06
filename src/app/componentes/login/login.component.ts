import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Libro } from 'src/app/interfaces/libros';
import { InicioS } from 'src/app/interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  iniciarSesion: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.iniciarSesion=this.fb.group({
      correo:['',Validators.required],
      contrasena:['',Validators.required]
    }
    )
  }

  ngOnInit(): void {
  }


  entrar(){
    console.log(this.iniciarSesion);
    const Credencial:InicioS={
      correo: this.iniciarSesion.get('correo')?.value,
      contrasena: this.iniciarSesion.get('contrasena')?.value,
    }
    console.log(Credencial);
  }

}
