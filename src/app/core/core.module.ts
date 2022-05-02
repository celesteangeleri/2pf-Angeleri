import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,  

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
    
  ]
})
export class CoreModule { }
