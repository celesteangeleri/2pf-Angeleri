import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentFormRoutingModule } from './student-form-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentFormRoutingModule
  ],
  exports:[
    StudentFormRoutingModule
  ]
})
export class StudentFormModule { }
