import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Cursos } from '../models/cursos';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  public url = 'https://625eedb1873d6798e2b063f8.mockapi.io/cursos';
  cursos: Cursos[] = [];
  constructor(private http: HttpClient) {}

  obtenercursos$(): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(this.url);
  }

  eliminarCurso(id: number): Observable<Cursos> {
    return this.http.delete<Cursos>(this.url + `/${id}`);
  }

  modificarCurso(curso: any): Observable<Cursos> {
    console.log(this.cursos,'servicio');
    
    return this.http.put<Cursos>(this.url + `/${curso.id}`, curso);
  }
  agregarCurso(curso: Cursos): Observable<Cursos> {
    return this.http.post<Cursos>(this.url, curso).pipe(
      tap(() => {
        this.cursos.push(curso);
      })
    );
  }
}
