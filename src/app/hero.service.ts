import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  /*    change this role "admin" or "user"    */
  role = 'admin';
  constructor() { }


  isRoleChecked() {
       return this.role;
   }


}
