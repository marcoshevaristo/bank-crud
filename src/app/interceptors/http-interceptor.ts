import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class HttpInterceptorProvider implements HttpInterceptor {
  private activeRequests: string[] = [];
  constructor(private snackBar: MatSnackBar, private loadingService: LoadingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const noSpinnerHeader = request.headers.get('no-spinner');
    const delayHeader = request.headers.get('delay') ? +request.headers.get('delay') : null;
    if (!noSpinnerHeader && !request.url.includes('/assets/')) {
      this.loadingService.loading$.next(true);
      this.activeRequests.push(this.getUrlWithoutParams(request.url));
    }

    return next.handle(request).pipe(
      delay(delayHeader),
      catchError((response: HttpErrorResponse) => {
        this.snackBar.open(response.message, null, { duration: 3000 });
        if (this.activeRequests.includes(this.getUrlWithoutParams(response.url))) {
          this.activeRequests.splice(
            this.activeRequests.findIndex((item) => item === this.getUrlWithoutParams(request.url)),
            1
          );
          if (!this.activeRequests.length) {
            this.loadingService.loading$.next(false);
          }
        }
        return throwError(() => new Error(response.message));
      }),
      tap((response) => {
        if (response instanceof HttpResponse) {
          if (this.activeRequests.includes(this.getUrlWithoutParams(response.url))) {
            this.activeRequests.splice(
              this.activeRequests.findIndex((item) => item === this.getUrlWithoutParams(request.url)),
              1
            );
            if (!this.activeRequests.length) {
              this.loadingService.loading$.next(false);
            }
          }
        }
      })
    );
  }

  private getUrlWithoutParams(fullUrl: string | null): string {
    if (!fullUrl) {
      return '';
    }

    const decodedUrl = decodeURIComponent(fullUrl.trim());

    if (!decodedUrl.includes('?')) {
      return decodedUrl;
    }

    return decodedUrl.substring(0, decodedUrl.indexOf('?'));
  }

  private handleRequest(request: HttpRequest<any>, next: HttpHandler) {}
}
