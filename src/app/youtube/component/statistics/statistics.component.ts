import { Component, Input } from '@angular/core';
import { IResponseItem } from 'src/app/core/response.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  @Input() item!: IResponseItem;

  getSours() {
    return {
      viewCount: this.item.statistics.viewCount,
      likeCount: this.item.statistics.likeCount,
      dislikeCount: this.item.statistics.dislikeCount,
      commentCount: this.item.statistics.commentCount,
    };
  }
}
