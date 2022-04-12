import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/core/services/search.service';

@Injectable({
  providedIn: 'root',
})
export class InfoGuard implements CanActivate {
  constructor(private searchService: SearchService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (
      this.searchService.result &&
      this.searchService.result.filter((item) => item.id === route.params['id'])[0]
    ) {
      return true;
    } else {
      this.router.navigateByUrl('/404');
      return false;
    }
  }
}
