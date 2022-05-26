import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/core/models/usuario';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  sesionActiva!: any;
  usuarios: Usuario[] = [];

  constructor(private authService: AuthService) {
    this.authService.getUsuario().subscribe((data) => {
      this.usuarios = data;
      this.sesionActiva = JSON.parse(localStorage.getItem('sesion') || '{}');
    });
  }
  ngOnInit(): void {}
}
