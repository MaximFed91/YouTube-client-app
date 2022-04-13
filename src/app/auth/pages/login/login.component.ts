import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl(''),
  });
  constructor(private loginService: LoginService) {}

  submit() {
    this.loginService.login(this.loginForm.value.name, this.loginForm.value.pass);
  }
}
