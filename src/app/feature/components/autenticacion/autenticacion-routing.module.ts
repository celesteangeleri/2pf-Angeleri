import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from '../cursos/cursos.component';
import { HomeComponent } from '../home/home.component';
import { StudentAbmComponent } from '../student-abm/student-abm.component';
import { StudentFormComponent } from '../student-form/student-form.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'registro',
        component: RegistroComponent,
        canActivateChild: [AuthGuard],
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivateChild: [AuthGuard],
      },
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
      { path: 'home', component: HomeComponent, canActivateChild: [AuthGuard] },
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
export class AutenticacionRoutingModule {}
