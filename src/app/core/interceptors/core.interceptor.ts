import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const cloned = req.clone({
      url: `${environment.API_URL}/${req.url}`,
      setParams: {
        'key': 'AIzaSyBtvd_0ahfOAYQr9ZI6Lu7bgp5in9QDXsU',
      }
    });

    return next.handle(cloned);
  }

}
