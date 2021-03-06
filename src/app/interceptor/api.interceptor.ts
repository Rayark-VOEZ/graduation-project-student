import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    // API_URL: string = "http://47.108.237.121:8080";
    API_URL: string = "http://localhost:8080";

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const request = req.clone({url: this.API_URL + req.url})
        return next.handle(request);
    }
}
