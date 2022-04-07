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
      viewCount: this.item.statistics.viewCount,
      likeCount: this.item.statistics.likeCount,
      dislikeCount: this.item.statistics.dislikeCount,
      commentCount: this.item.statistics.commentCount,
      title: this.item.snippet.title,
      date: this.item.snippet.publishedAt,
    };
  }
}
