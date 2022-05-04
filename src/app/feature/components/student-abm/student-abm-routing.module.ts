import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../autenticacion/auth.guard';
import { CursosComponent } from '../cursos/cursos.component';
import { HomeComponent } from '../home/home.component';
import { StudentFormComponent } from '../student-form/student-form.component';
import { StudentAbmComponent } from './student-abm.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'inicio',
        component: HomeComponent,
        canActivateChild: [AuthGuard],
      },
      {
        path: 'cursos',
        component: CursosComponent,
        canActivateChild: [AuthGuard],
      },
      {
        path: 'alumnos',
        component: StudentAbmComponent,
        canActivateChild: [AuthGuard],
      },
      {
        path: 'inscripciones',
        component: StudentFormComponent,
        canActivateChild: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentAbmRoutingModule {}
