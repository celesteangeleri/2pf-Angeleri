import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from 'src/app/core/models/cursos';
import { CursosService } from 'src/app/core/services/cursos.service';
import { AddCursoDialogComponent } from '../dialog/add-curso-dialog/add-curso-dialog.component';
import { CursoDialogComponent } from '../dialog/curso-dialog/curso-dialog.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(private cursosService: CursosService, public dialog: MatDialog) {
    this.cursosService.obtenercursos$().subscribe((data) => {
      this.cursos = data;
    });
  }

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos() {
    this.cursosService.obtenercursos$().subscribe((data: Curso[]) => {
      this.cursos = data;
    });
  }
  deleteCurso(id: number) {
    this.cursosService.eliminarCurso(id).subscribe(() => {
      alert('Curso eliminado');
      this.cargarCursos();
    });
  }
  modificarCurso() {
    this.cursosService.modificarCurso(this.cursos).subscribe(() => {
      console.log(this.cursos, 'modificado');

      this.cargarCursos();
    });
  }
  agregarCurso() {
    this.abrirAddCursoDialog(this.cursos);
    this.cargarCursos()
  }

  abrirCursoDialog(curso: any) {
    const dialogRef = this.dialog.open(CursoDialogComponent, {
      width: '300px',
      data: curso,
    });
    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
      alert('Curso modificado');
      this.cargarCursos();
    });
  }

  abrirAddCursoDialog(curso: any) {
    const dialogRef = this.dialog.open(AddCursoDialogComponent, {
      width: '250px',
      data: curso,
    });
    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
      this.cargarCursos();
    });
  }
}
