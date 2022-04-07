import { Component } from '@angular/core';
import { IResponseItem } from './core/response.model';

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
