import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  LoginComponent,
  RegistroComponent,
  
  
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent,
    RegistroComponent
  ]

})
export class AutenticacionModule { }
