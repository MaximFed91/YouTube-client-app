import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/component/header/header.component';
import { SearchResultsComponent } from './youtube/component/search-results/search-results.component';
import { SearchItemComponent } from './youtube/component/search-item/search-item.component';
import { LoginBlockComponent } from './core/component/header/login-block/login-block.component';
import { FilterBlockComponent } from './core/component/filter-block/filter-block.component';
import { BorderColorDirective } from './search/derectives/border-color.directive';
import { SortPipe } from './search/pipes/sort.pipe';
import { FilterPipe } from './search/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    LoginBlockComponent,
    FilterBlockComponent,
    BorderColorDirective,
    SortPipe,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
