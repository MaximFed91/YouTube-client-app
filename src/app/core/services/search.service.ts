import { Injectable } from '@angular/core';
import { from, map, Observable, reduce, ReplaySubject, switchMap } from 'rxjs';
import { IResponse, IResponseItem, ISearchResponse } from '../response.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchResult$ = new ReplaySubject<IResponseItem[]>(1);
  result!: IResponseItem[];
  constructor(private http: HttpClient) {}
  getVideo(searchStr: string) {
    return this.http
      .get<ISearchResponse>(
        `https://www.googleapis.com/youtube/v3/search?key=&type=video&maxResults=16&q=${searchStr}`,
      )
      .pipe(
        switchMap((data) => from(data.items)),
        map((item) => item.id.videoId),
        reduce((a, b) => `${a},${b}`),
        switchMap((group) => this.getVideoData(group)),
        map((data) => data.items),
      );
  }
  getVideoData(group: string): Observable<IResponse> {
    return this.http.get<IResponse>(
      `https://www.googleapis.com/youtube/v3/videos?key=&id=${group}&part=snippet,statistics`,
    );
  }
}
