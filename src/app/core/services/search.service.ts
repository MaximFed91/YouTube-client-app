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

  getResult(str?: string) {
    if (str) {
      this.searchResult$.next(this.resp.items);
    } else {
      this.searchResult$.next([]);
    }
  }
}
