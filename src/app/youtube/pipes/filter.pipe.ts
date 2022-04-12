import { Pipe, PipeTransform } from '@angular/core';
import { IResponseItem } from 'src/app/core/response.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: IResponseItem[], str?: string): IResponseItem[] {
    return str
      ? items.filter((item) =>
          item.snippet.title.trim().toLowerCase().includes(str.trim().toLowerCase()),
        )
      : items;
  }
}
