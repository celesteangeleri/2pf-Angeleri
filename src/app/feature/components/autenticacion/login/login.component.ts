import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth.service';
import { crearSesion, loadLogin } from 'src/app/state/actions/sesion.action';

 import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
formulario: FormGroup = new FormGroup({
  email: new FormControl(''),
  password: new FormControl('')
});
  constructor(
    private auth : AuthService,
    private router : Router,
    private store : Store<AppState>
  ) { }

  ngOnInit(): void {
  }
login(){
  this.store.dispatch(loadLogin())
  this.auth.login(this.formulario.value.email, this.formulario.value.password).subscribe((user) => {
    if(user){
      this.store.dispatch(crearSesion({usuario: user}));
      this.auth.establecerSesion(true, user[0])
      this.router.navigate(['/home', 'inicio']);
    }else{
      alert("Credenciales incorrectas");
    }
  })
}
}
