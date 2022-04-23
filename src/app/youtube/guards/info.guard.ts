import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { find, from, Observable, of, switchMap } from 'rxjs';
import { IAppState } from 'src/app/redux/redux.models';

@Injectable({
  providedIn: 'root',
})
export class InfoGuard implements CanActivate {
  constructor(private store: Store<IAppState>, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    return this.store.pipe(
      switchMap((state) => from(state.youtubeCards)),
      find((item) => item.id === route.params['id']),
      switchMap((item) => {
        if (item) {
          return of(true);
        }
        return of(this.router.createUrlTree(['/404']));
      }),
    );
  }
}
