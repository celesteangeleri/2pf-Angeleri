import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrls: ['./curso-dialog.component.css'],
})
export class CursoDialogComponent implements OnInit {
  formEditCursos!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CursoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cursosService: CursosService
  ) {
    this.formEditCursos = this.fb.group({
      nombre: new FormControl(data.nombre),
      duracion: new FormControl(data.duracion),
      descripcion: new FormControl(data.descripcion),
      precio: new FormControl(data.precio),
    });
  }
  ngOnInit(): void {}
  editarCurso() {
    let curso: any = {
      id: this.data.id,
      nombre: this.formEditCursos.value.nombre,
      duracion: this.formEditCursos.value.duracion,
      descripcion: this.formEditCursos.value.descripcion,
      precio: this.formEditCursos.value.precio,
    };
    this.cursosService.modificarCurso(curso).subscribe((curso) => {
      console.log(curso);
    });
    this.dialogRef.close(curso);
  }
}
