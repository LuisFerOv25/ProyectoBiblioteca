import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Libro } from 'src/app/interfaces/libros';
@Component({
  selector: 'app-edita-libro',
  templateUrl: './edita-libro.component.html',
  styleUrls: ['./edita-libro.component.css']
})
export class EditaLibroComponent implements OnInit {

  editaLib: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.editaLib=this.fb.group({
      isbn:['',Validators.required],
      titulo:['',Validators.required],
      editorial:['',Validators.required]
    }
    )
  }

  ngOnInit(): void {
  }


  modificar(){
    console.log(this.editaLib);
    const libro:Libro={
      ISBN: this.editaLib.get('isbn')?.value,
      titulo: this.editaLib.get('titulo')?.value,
      editorial: this.editaLib.get('editorial')?.value,
    }
    console.log(libro);
  }
}
