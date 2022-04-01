import { Component } from '@angular/core';
import { IResponseItem } from './response.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: IResponseItem[] = [];

  setItems(arr: IResponseItem[]) {
    this.items = arr;
  }
}
