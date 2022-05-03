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
      canActivate: [AuthGuard]
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
