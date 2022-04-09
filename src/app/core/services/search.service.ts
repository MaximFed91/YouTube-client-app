import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IResponse, IResponseItem } from '../response.model';
import response from '../common/youtube-response.json';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchResult$ = new Subject<IResponseItem[]>();
  resp: IResponse = response;
  str = '';
  result!: IResponseItem[];
  setStr(searchStr: string) {
    this.str = searchStr;
  }
  getResult() {
    if (this.str) {
      this.result = this.resp.items;
      this.searchResult$.next(this.resp.items);
    } else {
      this.searchResult$.next([]);
    }
  }
}
