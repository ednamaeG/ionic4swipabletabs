import { ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MainguardService implements CanActivate{

  constructor(private router:Router,private auth:AuthService) { }

  canActivate(route:ActivatedRouteSnapshot){
    const authState = this.auth.authState$.value;
    if(authState){
      this.router.navigate([""]);
    }
    return true;
  }
}
