import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAbmComponent } from './components/student-abm/student-abm.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { EditDialogComponent } from './components/dialog/student-dialog/edit-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CursoDialogComponent } from './components/dialog/curso-dialog/curso-dialog.component';
@NgModule({
  declarations: [
    StudentAbmComponent,
    StudentFormComponent,
    CursosComponent,
    EditDialogComponent,
    HomeComponent,
    CursoDialogComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

  ],
  exports:[
    RouterModule,
    CursosComponent,
    StudentAbmComponent,
    StudentFormComponent,
  ]
  // exports: [FlexLayoutModule, MaterialModule]
})
export class FeatureModule {}
