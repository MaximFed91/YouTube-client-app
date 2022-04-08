import { Component } from '@angular/core';
import { Router } from '@angular/router';
import response from '../../common/youtube-response.json';
import { IResponse } from '../../response.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSettingsHidden = true;
  resp: IResponse = response;
  inputValue = '';

  constructor(private router: Router, private readonly searchService: SearchService) {}

  toggleSettings() {
    this.isSettingsHidden = !this.isSettingsHidden;
  }
  getResponse() {
    this.router.navigate(['/search']);
    this.searchService.getResult(this.inputValue);
  }
}
