import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from '../cursos/cursos.component';
import { HomeComponent } from '../home/home.component';
import { StudentAbmComponent } from '../student-abm/student-abm.component';
import { StudentFormComponent } from '../student-form/student-form.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:'',
    children:[
      {path: 'registro',component: RegistroComponent},
      {path: 'login', component: LoginComponent},
      {path: 'cursos', component: CursosComponent},
      {path: 'cursos/:id', component: CursosComponent},
      {path:'inicio', component: HomeComponent},
      {path:'home', component: HomeComponent},
      {path:'inscripcione', component: StudentFormComponent},
      {path: 'alumnos', component: StudentAbmComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacionRoutingModule { }
