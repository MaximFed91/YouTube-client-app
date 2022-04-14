import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  videoRegexp = new RegExp('https:\/\/(www\.)*youtube\.com\/watch\?v=[A-z0-9]+');
  cardForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
    ]),
    description: new FormControl('', Validators.maxLength(255)),
    img: new FormControl('', [
      Validators.required,
      Validators.pattern('https://i.ytimg.com/vi/[A-z0-9/]*.jpg'),
    ]),
    video: new FormControl('', [Validators.required, Validators.pattern(this.videoRegexp)]),
  });
  submit() {
    console.log('submit');
  }
}
