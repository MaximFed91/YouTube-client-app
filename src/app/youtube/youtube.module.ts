import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { SearchItemComponent } from './component/search-item/search-item.component';
import { SearchResultsComponent } from './component/search-results/search-results.component';
import { BorderColorDirective } from './derectives/border-color.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    BorderColorDirective,
    FilterPipe,
    SortPipe,
  ],
  imports: [CommonModule, YoutubeRoutingModule],
})
export class YoutubeModule {}
