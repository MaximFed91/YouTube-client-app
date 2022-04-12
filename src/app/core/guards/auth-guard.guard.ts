import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/auth/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate, CanLoad {
  constructor(private readonly router: Router, private readonly authService: LoginService) {}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLogin) {
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }
  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLogin) return true;
    this.router.navigateByUrl('login');
    return false;
  }
}
