import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registrolib } from 'src/app/interfaces/RegistroLibro';

@Component({
  selector: 'app-registro-libro',
  templateUrl: './registro-libro.component.html',
  styleUrls: ['./registro-libro.component.css']
})
export class RegistroLibroComponent implements OnInit {

  registroLibr: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.registroLibr=this.fb.group({
      isbn:['',Validators.required],
      nom_lib:['',Validators.required],
      autor:['',Validators.required],
      editorial:['',Validators.required],
      
    }
    )
  }

  ngOnInit(): void {
  }


  reglib(){
    console.log(this.registroLibr);
    const registro:registrolib={
      isbn: this.registroLibr.get('isbn')?.value,
      nom_lib: this.registroLibr.get('nom_lib')?.value,
      autor: this.registroLibr.get('autor')?.value,
      editorial: this.registroLibr.get('editorial')?.value,
      
    }
    console.log(registro);
  }

}
