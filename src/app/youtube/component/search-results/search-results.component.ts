import { Component, OnDestroy, OnInit } from '@angular/core';
import { IResponseItem } from 'src/app/core/response.model';
import { FilterDataService } from 'src/app/core/services/filter-data.service';
import { SearchService } from 'src/app/core/services/search.service';
import { ISort } from 'src/app/core/services/sort.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  items: IResponseItem[] = [];
  str = '';
  sort: ISort = {
    sortBy: 'date',
    order: 1,
  };
  constructor(
    private readonly filterData: FilterDataService,
    private readonly searchService: SearchService,
  ) {}

  ngOnInit(): void {
    this.filterData.filterStr$.subscribe((str) => {
      this.str = str;
    });
    this.filterData.filterSort$.subscribe((sort) => {
      this.sort = sort;
    });
    this.searchService.searchResult$.subscribe((resp) => {
      this.items = resp;
    });
    this.searchService.getResult('re');
  }

  ngOnDestroy(): void {
    this.filterData.filterStr$.unsubscribe();
    this.filterData.filterSort$.unsubscribe();
    this.searchService.searchResult$.unsubscribe();
  }
}
