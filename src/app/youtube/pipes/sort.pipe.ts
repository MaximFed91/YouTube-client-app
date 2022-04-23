import { Pipe, PipeTransform } from '@angular/core';
import { IResponseItem } from 'src/app/core/response.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(
    items: IResponseItem[] | null,
    sortBy?: 'date' | 'views',
    order = 1,
  ): IResponseItem[] | null {
    if (items) {
      const result = [...items];
      if (sortBy === 'date') {
        return result.sort(
          (a, b) => (Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt)) * order,
        );
      }
      if (sortBy === 'views') {
        return result.sort(
          (a, b) => (Number(a.statistics.viewCount) - Number(b.statistics.viewCount)) * order,
        );
      }
      return result;
    }
    return null;
  }
}
