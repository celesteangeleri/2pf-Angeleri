import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario';
import { AuthService } from 'src/app/core/services/auth.service';

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
  ) { }

  ngOnInit(): void {
  }
login(){
  const email = this.formulario.value.email;
  const password = this.formulario.value.password;
  this.auth.login(email, password).subscribe((data : Usuario [])=>{
    if(data.length > 0){
      console.log(data, 'usuario logeado');     
      this.auth.establecerSesion(true, data[0])
       this.router.navigate(['/home', 'inicio']);
    }
    else{
      console.log('error de autenticacion componente', data);
    }

  });
}
}
