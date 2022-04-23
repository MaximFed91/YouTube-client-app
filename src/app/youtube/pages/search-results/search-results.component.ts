import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IResponseItem } from 'src/app/core/response.model';
import { FilterDataService } from 'src/app/core/services/filter-data.service';
import { ISort } from 'src/app/core/services/sort.model';
import { IAppState, IUserCard } from 'src/app/redux/redux.models';
import { selectUserCards, selectYoutubeCards } from 'src/app/redux/selectors/app.selectors';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  userCards$: Observable<IUserCard[]>;
  youtubeCards$: Observable<IResponseItem[]>;
  str = '';
  sort: ISort = {
    sortBy: 'date',
    order: 1,
  };
  constructor(
    private readonly filterData: FilterDataService,
    private readonly store: Store<IAppState>,
  ) {
    this.userCards$ = store.select(selectUserCards);
    this.youtubeCards$ = store.select(selectYoutubeCards);
  }

  ngOnInit(): void {
    this.filterData.filterStr$.subscribe((str) => {
      this.str = str;
    });
    this.filterData.filterSort$.subscribe((sort) => {
      this.sort = sort;
    });
  }
}
