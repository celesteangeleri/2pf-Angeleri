import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cursos } from '../models/cursos';
import { Student } from '../models/student';
@Injectable({
  providedIn: 'root',
})
export class CursosService {
  public url = 'https://625eedb1873d6798e2b063f8.mockapi.io/cursos';

  constructor(private http: HttpClient) {}

  obtenercursos$(): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(this.url);
  }

  eliminarCurso(id: number): Observable<Cursos> {
    return this.http.delete<Cursos>(this.url + `/${id}`);
    
  }

  modificarCurso(curso: any): Observable<Cursos> {
    return this.http.put<Cursos>(this.url + `/${curso.id}`, curso);
  }
}
