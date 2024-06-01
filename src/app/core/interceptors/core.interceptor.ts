import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const cloned = req.clone({
      url: `${environment.API_URL}/${req.url}`,
      setParams: {
        'key': 'AIzaSyAJLHX8kMUZlntyrrI89OMt1F3pLhsvxyA',
      }
    });

    return next.handle(cloned);
  }

}
