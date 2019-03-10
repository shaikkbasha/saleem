import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpXsrfTokenExtractor, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable()
export class HttpXsrfInterceptor implements HttpInterceptor {

  constructor(private tokenExtractor: HttpXsrfTokenExtractor) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headerName = 'X-XSRF-TOKEN';
    const token = this.tokenExtractor.getToken();
    console.log(token);
    if (token !== null && !req.headers.has(headerName)) {
      req = req.clone({
        setHeaders: {
          headerName : token
        }
      });
    }
    return next.handle(req);
  }
}
