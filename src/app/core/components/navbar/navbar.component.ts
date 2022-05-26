import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectorSesionActiva } from 'src/app/state/selectors/login.selectot';
import { Usuario } from '../../models/usuario';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  sesionActiva! : any;
  usuarios: Usuario[] = [];
  sesion$!: Observable<any>;
  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {
       this.sesionActiva = JSON.parse(localStorage.getItem('sesion') || '{}');
     }
  

  ngOnInit(): void {
    this.sesion$ = this.store.select(selectorSesionActiva);
   
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/autenticacion', 'login']);
  }

}
