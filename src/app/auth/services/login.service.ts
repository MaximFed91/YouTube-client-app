import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLogin = false;
  userName$ = new Subject<string>();
  constructor(private readonly router: Router) {
    if (localStorage.getItem('user')) {
      this.isLogin = true;
    }
  }
  login(name: string, pass: string) {
    if (name && pass) {
      const user = {
        user: name,
        token: `Token-9164${pass}`,
      };
      localStorage.setItem('user', JSON.stringify(user));
      this.isLogin = true;
      this.userName$.next(name);
      this.router.navigateByUrl('/');
    }
  }
}
