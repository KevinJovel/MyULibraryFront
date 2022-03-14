import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryGuardGuard implements CanActivate, CanLoad {
  constructor(private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let usuario=sessionStorage.getItem("idUser");
      let role=sessionStorage.getItem("role"); 
        if(usuario&&role=="2"){
          return true;
        }else{
          //redirect login error
          debugger
          this.router.navigate(["/User/unauthorized"]);
          return false;
        }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let role=sessionStorage.getItem("role"); 
      if(role=="2"){
        return true;
      }else{
        return false;
      }
  }
}
