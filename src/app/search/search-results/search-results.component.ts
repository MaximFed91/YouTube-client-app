import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IResponseItem } from 'src/app/response.interface';
import { FilterDataService } from 'src/app/services/filter-data.service';
import { ISort } from 'src/app/services/sort.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  @Input() items: IResponseItem[] = [];
  str = '';
  sort: ISort = {
    sortBy: 'date',
    order: 1,
  };
  constructor(private readonly filterData: FilterDataService) {}

  ngOnInit(): void {
    this.filterData.filterStr$.subscribe((str) => {
      this.str = str;
    });
    this.filterData.filterSort$.subscribe((sort) => {
      this.sort = sort;
    });
  }

  ngOnDestroy(): void {
    this.filterData.filterStr$.unsubscribe();
    this.filterData.filterSort$.unsubscribe();
  }
}
