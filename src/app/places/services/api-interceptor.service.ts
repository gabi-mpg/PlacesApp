import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // let requestUrl = req.url;

    // if (requestUrl.indexOf('@api-x') !== -1) {
    //   // requestUrl = requestUrl.replace('@api-x', environment.apo);
    // }

    // req = req.clone({
    //   setHeaders: {
    //     Authorization: `fsq3et5FtK77BuzMOuzr7AAyfGXQ7zUvrMfC/WlmfGMSbvI=`
    //   }
    // });

    return next.handle(req);
  }
}
