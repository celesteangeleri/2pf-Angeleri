import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
formulario : FormGroup
  constructor(
    private auth : AuthService,
    private fb : FormBuilder,
    private router : Router
  ) { 
    this.formulario = this.fb.group({
      nombre : new FormControl ('',[ Validators.required]),
      apellido : new FormControl ('',[ Validators.required]),
      email : new FormControl ('',[ Validators.required]),
      password : new FormControl ('',[ Validators.required]),
    })
  }

  ngOnInit(): void {
  }
registro (){
  const usuario = this.formulario.value
  this.auth.registro(usuario).subscribe(()=>{
    console.log('Usuario registrado');
    this.formulario.reset()
    this.router.navigate(['/home', 'inicio'])
  })
}
}
