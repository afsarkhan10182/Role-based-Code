import { HeroService } from './hero.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthGuard implements CanActivate {

constructor(private heroService: HeroService, private router: Router) { }

  isRoleChecked() {
    const promise = new Promise (
    (resolve , reject) => { resolve(this.heroService.isRoleChecked())});
    return promise;
  }
  canActivate ( route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean>|boolean {
   return this.isRoleChecked()
     .then( (isRoleChecked: any) => {
       // alert(isRoleChecked);
       // alert(route.url);
   if (route.url == isRoleChecked) {
     this.router.navigate(['/home']);
   } else {
     return false;
     }
   } );
  }

}