import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Curso } from '../models/cursos';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  public url = 'https://625eedb1873d6798e2b063f8.mockapi.io/cursos';
  cursos: Curso[] = [];
  constructor(private http: HttpClient) {}

  obtenercursos$(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.url);
  }

  eliminarCurso(id: number): Observable<Curso> {
    return this.http.delete<Curso>(this.url + `/${id}`);
  }

  modificarCurso(curso: any): Observable<Curso> {
    console.log(this.cursos,'servicio');
    
    return this.http.put<Curso>(this.url + `/${curso.id}`, curso);
  }
  agregarCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.url, curso).pipe(
      tap(() => {
        this.cursos.push(curso);
      })
    );
  }
}
