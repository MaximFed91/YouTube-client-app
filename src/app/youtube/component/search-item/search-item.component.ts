import { Component, Input } from '@angular/core';
import { IResponseItem } from 'src/app/core/response.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() item!: IResponseItem;

  getSours() {
    return {
      imgUrl: this.item.snippet.thumbnails.medium.url,
      title: this.item.snippet.title,
      date: this.item.snippet.publishedAt,
      id: this.item.id,
    };
  }
}
