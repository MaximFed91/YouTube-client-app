import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ISort } from './sort.model';

@Injectable({
  providedIn: 'root',
})
export class FilterDataService {
  filterStr$ = new Subject<string>();
  filterSort$ = new Subject<ISort>();

  changeStr(str: string) {
    this.filterStr$.next(str);
  }
  changeSort(sort: ISort) {
    this.filterSort$.next(sort);
  }
}
