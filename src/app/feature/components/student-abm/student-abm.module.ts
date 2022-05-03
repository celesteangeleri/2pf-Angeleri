import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentAbmRoutingModule } from './student-abm-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentAbmRoutingModule
  ],
  exports:[
    StudentAbmRoutingModule
  ]
})
export class StudentAbmModule { }
