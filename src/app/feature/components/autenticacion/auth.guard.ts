import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { AutenticacionModule } from './autenticacion.module';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(
  // private auth : AutenticacionModule
private router : Router
){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let sesion = JSON.parse(localStorage.getItem('sesion') || '{}');
    if(sesion.activa){
      // this.router.navigate(['/home']);
      return true;}
    else{
      this.router.navigate(['/autenticacion', 'login']);
      return false;
    }
     

  }
  
}
