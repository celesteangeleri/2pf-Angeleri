import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Cursos } from 'src/app/core/models/cursos';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  cursos: Cursos[] = [];

  constructor(private cursosService: CursosService) {
    this.cursosService.obtenercursos$().subscribe((data) => {
      this.cursos = data;
    });
  }

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos() {
    this.cursosService.obtenercursos$().subscribe((data: Cursos[]) => {
      this.cursos = data;
    });
  }
  deleteCurso(id: number) {
    this.cursosService.eliminarCurso(id).subscribe(() => {
      this.cargarCursos();
    });
  }
}
