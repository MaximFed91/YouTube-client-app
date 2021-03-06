import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.scss'],
})
export class LoginBlockComponent implements OnInit {
  name = 'Your Name';
  button = 'Login';
  constructor(private authService: LoginService) {}

  ngOnInit(): void {
    this.authService.userName$.subscribe((name) => {
      this.name = name;
      this.button = 'Logout';
    });
    if (localStorage.getItem('user')) {
      this.name = JSON.parse(localStorage.getItem('user')!).user;
      this.button = 'Logout';
    }
  }
  checkAuth() {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
      this.authService.isLogin = false;
      this.name = 'Your Name';
      this.button = 'Login';
    }
  }
}
