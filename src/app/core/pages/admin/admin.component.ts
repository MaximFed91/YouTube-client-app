import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  cardForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', Validators.maxLength(255)),
    img: new FormControl(''),
    video: new FormControl(''),
  });
  submit() {
    console.log('submit');
  }
  getMessageTitle() {
    return this.cardForm.get('title')?.errors;
  }
  getMessageImg() {
    console.log(this.cardForm.get('img')?.errors);
  }
  getMessageVideo() {
    console.log(this.cardForm.get('video')?.errors);
  }
}
