import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  role = 'admin';
  constructor() { }


  isRoleChecked() {
       // if (this.role =='Admin') {
       //     return true;
       // }
       return this.role;
   }


}
