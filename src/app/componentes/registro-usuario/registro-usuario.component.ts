import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/registroUsuario';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

   registroUs: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.registroUs=this.fb.group({
      id:['',Validators.required],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      correo:['',Validators.required],
      celular:['',Validators.required],
      
    }
    )
  }

  ngOnInit(): void {
  }


  reg(){
    console.log(this.registroUs);
    const registro:Usuario={
      id: this.registroUs.get('id')?.value,
      nombre: this.registroUs.get('nombre')?.value,
      apellido: this.registroUs.get('apellido')?.value,
      correo: this.registroUs.get('correo')?.value,
      celular: this.registroUs.get('celular')?.value,
      
    }
    console.log(registro);
  }
}
