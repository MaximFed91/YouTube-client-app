import { Component, EventEmitter, Output } from '@angular/core';
import response from '../common/youtube-response.json';
import { IResponse, IResponseItem } from '../response.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSettingsHidden = true;
  resp: IResponse = response;
  @Output() getItems = new EventEmitter<IResponseItem[]>();

  toggleSettings() {
    this.isSettingsHidden = !this.isSettingsHidden;
  }
  getResponse() {
    this.getItems.emit(this.resp.items);
  }
}
