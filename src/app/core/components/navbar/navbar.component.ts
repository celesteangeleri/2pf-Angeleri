import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // sesionActiva! : boolean;
  constructor(private auth: AuthService, private router: Router) {
    // this.sesionActiva = localStorage.getItem('sesion') ? true : false;
  }

  ngOnInit(): void {}
  logout() {
    this.auth.logout();
    this.router.navigate(['/autenticacion', 'login']);
  }
}
