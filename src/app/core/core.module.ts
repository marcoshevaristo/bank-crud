import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateService } from '@ngx-translate/core';
import { HttpInterceptorProvider } from '../interceptors/http-interceptor';
import { SharedModule } from '../shared/shared.module';
import { CustomMatPaginatorIntlProvider } from './providers/custom-mat-paginator-intl.provider';

@NgModule({
  imports: [SharedModule, HttpClientModule, BrowserModule, BrowserAnimationsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorProvider,
      multi: true,
    },
    {
      provide: MatPaginatorIntl,
      useFactory: (translateService: TranslateService) => new CustomMatPaginatorIntlProvider(translateService),
      deps: [TranslateService],
    },
  ],
})
export class CoreModule {}
