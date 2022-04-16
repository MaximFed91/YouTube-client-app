import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class KeyApiInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addKeyApi(request));
  }
  addKeyApi(request: HttpRequest<unknown>) {
    const indx = request.url.indexOf('=') + 1;
    const keyApi = 'AIzaSyCn_ILnnyNqIEaRzthVXdiiKTCxMITFvBY';
    const requestUrl = `${request.url.slice(0, indx)}${keyApi}${request.url.slice(indx)}`;
    return request.clone({
      url: requestUrl,
    });
  }
}
