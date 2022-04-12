import { Component, Input } from '@angular/core';
import { FilterDataService } from '../../services/filter-data.service';
import { ISort } from '../../services/sort.model';

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.scss'],
})
export class FilterBlockComponent {
  @Input() isHidden = false;
  str = '';
  sort: ISort = {
    sortBy: 'date',
    order: 1,
  };
  constructor(private readonly filterData: FilterDataService) {}

  setFilterStr() {
    this.filterData.changeStr(this.str);
  }
  toggleSortViews() {
    this.sort.sortBy = 'views';
    this.sort.order = this.sort.order * -1;
    this.filterData.changeSort(this.sort);
  }
  toggleSortDate() {
    this.sort.sortBy = 'date';
    this.sort.order = this.sort.order * -1;
    this.filterData.changeSort(this.sort);
  }
}
