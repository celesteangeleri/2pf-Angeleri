import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuario: Usuario[] = []
  sesion: any = {
    activa: false,
    usuario: {},
  };
  public url = 'https://625eedb1873d6798e2b063f8.mockapi.io/usuario';
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url).pipe(
      map((usuarios: Usuario[]) => {      
        return usuarios.filter(u => u.email === email && u.password === password); 
      })
    );
  }
  establecerSesion(sesionActiva: boolean, usuario: Usuario) {
    this.sesion = {
       activa: sesionActiva,
        usuario: usuario 
    }
 localStorage.setItem('sesion', JSON.stringify(this.sesion));
  }
  logout(){
    this.sesion = {
      activa: false,  
      usuario: {}
    }
    localStorage.removeItem('sesion');
  }

  registro(usuario: Usuario): Observable<Usuario[]> {
    return this.http.post<Usuario[]>(this.url, usuario).pipe(
      tap(() => {
        this.usuario.push(usuario);
      })
    )
  }
}
