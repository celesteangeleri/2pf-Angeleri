import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from './feature/components/cursos/cursos.component';
import { HomeComponent } from './feature/components/home/home.component';
import { StudentAbmComponent } from './feature/components/student-abm/student-abm.component';
import { StudentFormComponent } from './feature/components/student-form/student-form.component';


const routes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'cursos', component: CursosComponent},
  {path: 'alumnos', component: StudentAbmComponent},
  {path: 'inscripcion', component: StudentFormComponent},
  {path: 'cursos/:id', component: CursosComponent},
  {path: 'home', component: HomeComponent},
  // {path: '', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
