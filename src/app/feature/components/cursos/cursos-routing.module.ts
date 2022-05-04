import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../autenticacion/auth.guard';
import { HomeComponent } from '../home/home.component';
import { StudentAbmComponent } from '../student-abm/student-abm.component';
import { StudentFormComponent } from '../student-form/student-form.component';
import { CursosComponent } from './cursos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cursos',
        component: CursosComponent,
        canActivateChild: [AuthGuard],
      },
      {
        path: 'cursos/:id',
        component: CursosComponent,
        canActivateChild: [AuthGuard],
      },
      {
        path: 'inicio',
        component: HomeComponent,
        canActivateChild: [AuthGuard],
      },
      { path: 'home', component: HomeComponent, 
      canActivateChild: [AuthGuard] },
      {
        path: 'inscripcione',
        component: StudentFormComponent,
        canActivateChild: [AuthGuard],
      },
      {
        path: 'alumnos',
        component: StudentAbmComponent,
        canActivateChild: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
