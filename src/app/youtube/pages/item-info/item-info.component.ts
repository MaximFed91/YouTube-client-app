import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IResponseItem } from 'src/app/core/response.model';
import { IAppState } from 'src/app/redux/redux.models';
import { selectYoutubeCards } from 'src/app/redux/selectors/app.selectors';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss'],
})
export class ItemInfoComponent implements OnInit, OnDestroy {
  id = '';
  items$: Observable<IResponseItem[]>;
  item!: IResponseItem;
  subs!: Subscription;
  constructor(private route: ActivatedRoute, private store: Store<IAppState>) {
    this.items$ = store.select(selectYoutubeCards);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.subs = this.items$.subscribe(
      (arr) => (this.item = arr.filter((item) => item.id === this.id)[0]),
    );
  }
  getSours() {
    return {
      imgUrl: this.item.snippet.thumbnails.high.url,
      title: this.item.snippet.title,
      date: new Date(this.item.snippet.publishedAt).toDateString(),
      description: this.item.snippet.description,
    };
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
