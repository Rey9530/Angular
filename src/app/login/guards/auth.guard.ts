import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; 
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor( private authService: AuthService,
               private router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // if ( this.authService.auth.id ) {
    //     return true;
    //   }

    // console.log('Bloqueado por el AuthGuard - CanActivate');
    // return false;
    let resp = this.authService.verificaAutenticacion(); 
    if( !resp ) {
      this.router.navigate(['./auth/login']);
    }
    return Promise.resolve(true) ;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {

      let data =  this.authService.verificaAutenticacion();
        
      if( !data ) {
        this.router.navigate(['./auth/login']);
      }
      return true;

      // if ( this.authService.auth.id ) {
      //   return true;
      // }

      // console.log('Bloqueado por el AuthGuard - CanLoad');
      // return false;
  }
}
