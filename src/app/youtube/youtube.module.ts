import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { SearchItemComponent } from './component/search-item/search-item.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { BorderColorDirective } from './directives/border-color.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ItemInfoComponent } from './pages/item-info/item-info.component';
import { StatisticsComponent } from './component/statistics/statistics.component';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    BorderColorDirective,
    FilterPipe,
    SortPipe,
    ItemInfoComponent,
    StatisticsComponent,
  ],
  imports: [CommonModule, YoutubeRoutingModule],
})
export class YoutubeModule {}
