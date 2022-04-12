import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  name = '';
  pass = '';
  constructor(private loginService: LoginService) {}

  login() {
    this.loginService.login(this.name, this.pass);
  }
}
