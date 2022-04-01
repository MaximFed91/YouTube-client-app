import { Component, Input } from '@angular/core';
import { IResponseItem } from 'src/app/response.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  @Input() items: IResponseItem[] = [];
}
