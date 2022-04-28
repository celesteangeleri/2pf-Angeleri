import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { StudentAbmComponent } from '../student-abm/student-abm.component';
import { StudentFormComponent } from '../student-form/student-form.component';
import { CursosComponent } from './cursos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'cursos', component: CursosComponent},
      {path: 'cursos/:id', component: CursosComponent},
      {path:'inicio', component: HomeComponent},
      {path:'home', component: HomeComponent},
      {path:'inscripcione', component: StudentFormComponent},
      {path: 'alumnos', component: StudentAbmComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
