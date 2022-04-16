import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IResponseItem } from 'src/app/core/response.model';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss'],
})
export class ItemInfoComponent implements OnInit {
  id = '';
  item!: IResponseItem;
  constructor(private route: ActivatedRoute, private searchService: SearchService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.item = this.searchService.result.filter((item) => item.id === this.id)[0];
  }
  getSours() {
    return {
      imgUrl: this.item.snippet.thumbnails.high.url,
      title: this.item.snippet.title,
      date: new Date(this.item.snippet.publishedAt).toDateString(),
      description: this.item.snippet.description,
    };
  }
}
