import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { ItemInfoComponent } from './pages/item-info/item-info.component';
import { InfoGuard } from './guards/info.guard';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsComponent,
  },
  {
    path: 'info/:id',
    component: ItemInfoComponent,
    canActivate: [InfoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
