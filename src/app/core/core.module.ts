import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ConversorDatosPipe } from './pipes/conversor-datos.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    ConversorDatosPipe,  

  ],
  imports: [
    CommonModule,
    MaterialModule, 
    FlexLayoutModule,
    RouterModule,
    
  ],
  exports: [
    MaterialModule,
    NavbarComponent,
    FlexLayoutModule,
    RouterModule,
    // ConversorDatosPipe
  ]
})
export class CoreModule { }
