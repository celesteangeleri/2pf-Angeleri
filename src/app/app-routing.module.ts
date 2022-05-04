import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './feature/components/autenticacion/auth.guard';
import { HomeComponent } from './feature/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'home',
    loadChildren: () =>
      import('./feature/components/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'alumnos',
    loadChildren: () =>
      import('./feature/components/student-abm/student-abm.module').then(
        (m) => m.StudentAbmModule
      ),canActivate: [AuthGuard],
  },
  {
    path:'cursos',
    loadChildren: () =>
      import('./feature/components/cursos/cursos.module').then(
        (m) => m.CursosModule
      ),canActivate: [AuthGuard],
  },
  {
    path:'inscripcione',
    loadChildren: () =>
      import('./feature/components/student-form/student-form.module').then(
        (m) => m.StudentFormModule
      ),canActivate: [AuthGuard],
  },
  {
    path: 'autenticacion',
    loadChildren: () =>
      import('./feature/components/autenticacion/autenticacion.module').then(
        (m) => m.AutenticacionModule
      ),
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
