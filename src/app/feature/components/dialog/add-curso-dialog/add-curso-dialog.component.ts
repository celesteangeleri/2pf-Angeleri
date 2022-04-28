import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Profesor } from 'src/app/core/models/profesor';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-add-curso-dialog',
  templateUrl: './add-curso-dialog.component.html',
  styleUrls: ['./add-curso-dialog.component.css'],
})
export class AddCursoDialogComponent implements OnInit {
  formAddCurso!: FormGroup;
  profesores: Profesor[] = [{
    id: 1,
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'juanperez@gmail.com'
  },
  {
    id: 2,
    nombre: 'Pedro',
    apellido: 'lorenzo',
    email: 'pedro@gmail.com'
  },
  {
    id: 3,
    nombre: 'lola',
    apellido: 'martinez',
    email: 'lola@gmail.com'
  },
  {
    id: 4,
    nombre: 'Juana',
    apellido: 'Gutierrez',
    email: 'juana@gmail.com'
  }

]
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddCursoDialogComponent>,
    private cursosService: CursosService
  ) {
    this.formAddCurso = this.fb.group({
      nombre: new FormControl(''),
      fechaInicio: new FormControl(''),
      fechaFin: new FormControl(''),
      descripcion: new FormControl(''),
      precio: new FormControl(''),
      profesor: new FormControl(''),
    });
  }
ngOnInit(): void {
  
}
// agregarCurso() {
//   const curso = this.formAddCurso.value;
//   this.cursosService.agregarCurso(curso).subscribe(
//     (curso) => {
//       console.log(curso);
//       alert('Curso agregado');
//     });
// }
nuevoCurso(){
  const curso = this.formAddCurso.value;
  this.cursosService.agregarCurso(curso).subscribe((curso) => {
    console.log(curso);
    alert('Curso agregado');
  })
  this.dialogRef.close();
}
}
