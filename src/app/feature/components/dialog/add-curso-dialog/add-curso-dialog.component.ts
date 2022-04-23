import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-add-curso-dialog',
  templateUrl: './add-curso-dialog.component.html',
  styleUrls: ['./add-curso-dialog.component.css'],
})
export class AddCursoDialogComponent implements OnInit {
  formAddCurso!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddCursoDialogComponent>,
    private cursosService: CursosService
  ) {
    this.formAddCurso = this.fb.group({
      nombre: new FormControl(''),
      duracion: new FormControl(''),
      descripcion: new FormControl(''),
      precio: new FormControl(''),
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
  this.cursosService.agregarCurso(this.formAddCurso.value);
  this.dialogRef.close();
}
}
