import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addCard } from 'src/app/redux/actions/app.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(private store: Store) {}
  cardForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
    ]),
    description: new FormControl('', Validators.maxLength(255)),
    img: new FormControl('', [
      Validators.required,
      Validators.pattern('https://i\\.ytimg\\.com/vi/[A-z0-9-]{11}/mqdefault\\.jpg'),
    ]),
    video: new FormControl('', [
      Validators.required,
      Validators.pattern('https://youtu\\.be/[A-z0-9-]{11}'),
    ]),
  });
  submit() {
    this.store.dispatch(addCard({ userCard: this.cardForm.value }));
    this.cardForm.reset();
  }
}
