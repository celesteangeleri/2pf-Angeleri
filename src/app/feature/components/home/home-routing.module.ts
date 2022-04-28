import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from '../cursos/cursos.component';
import { StudentAbmComponent } from '../student-abm/student-abm.component';
import { StudentFormComponent } from '../student-form/student-form.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path:'',
    children: [
      {path: 'inicio', component: HomeComponent},
      {path: 'cursos', component: CursosComponent},
      {path: 'alumnos', component: StudentAbmComponent},
      {path: 'inscripciones', component: StudentFormComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
