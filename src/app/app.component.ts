import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AvailableLanguage } from './models/available-language.enum';
import { LoadingService } from './services/loading.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public loading = false;
  private subscription = new Subscription();

  constructor(private loadingService: LoadingService, private translateService: TranslateService) {}

  ngOnInit() {
    this.loadingService.loading$.subscribe((loading) => {
      this.loading = loading;
    });
    this.defineTranslations();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private defineTranslations() {
    const nav = navigator as any;
    const userLanguage = nav.language || (nav.userLanguage as AvailableLanguage);
    this.translateService.use(userLanguage);
  }
}
