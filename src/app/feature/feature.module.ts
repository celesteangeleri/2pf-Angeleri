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
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CursoDialogComponent } from './components/dialog/curso-dialog/curso-dialog.component';
import { AddCursoDialogComponent } from './components/dialog/add-curso-dialog/add-curso-dialog.component';
import { LoginComponent } from './components/autenticacion/login/login.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AutenticacionModule } from './components/autenticacion/autenticacion.module';
import { CursosRoutingModule } from './components/cursos/cursos-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ConversorDatosPipe } from '../core/pipes/conversor-datos.pipe';



@NgModule({
  declarations: [
    StudentAbmComponent,
    StudentFormComponent,
    CursosComponent,
    EditDialogComponent,
    HomeComponent,
    CursoDialogComponent,
    AddCursoDialogComponent,
    ToolbarComponent,
  
    
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
    AutenticacionModule,
    NgxSpinnerModule,
   

  ],
  exports:[
    RouterModule,
    CursosComponent,
    StudentAbmComponent,
    StudentFormComponent,
    HomeComponent,
    LoginComponent,
    ToolbarComponent,
    AutenticacionModule,
    CursosRoutingModule,
    NgxSpinnerModule,
    
  
  ]
  // exports: [FlexLayoutModule, MaterialModule]
})
export class FeatureModule {}
