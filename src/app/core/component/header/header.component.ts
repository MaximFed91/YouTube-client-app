import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, Subscription } from 'rxjs';
import { addYoutubeCard } from 'src/app/redux/actions/app.actions';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isSettingsHidden = true;
  inputValue = '';
  subscriptionKeyup!: Subscription;
  subscription!: Subscription;
  @ViewChild('search', { static: true }) private searchInput!: ElementRef<HTMLInputElement>;
  constructor(
    private router: Router,
    private readonly searchService: SearchService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.subscriptionKeyup = fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(700),
        map((e) => (e.target as HTMLInputElement).value),
        filter((str) => str.length > 2),
        distinctUntilChanged(),
      )
      .subscribe((str) => {
        this.router.navigate(['/search']);
        this.subscription = this.searchService.getVideo(str).subscribe((items) => {
          this.store.dispatch(addYoutubeCard({ responseItems: items }));
        });
      });
  }
  toggleSettings() {
    this.isSettingsHidden = !this.isSettingsHidden;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscriptionKeyup.unsubscribe();
  }
}
