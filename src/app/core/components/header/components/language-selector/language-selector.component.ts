import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AvailableLanguage } from 'src/app/models/available-language.enum';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit, OnDestroy {
  public currentLang: AvailableLanguage = AvailableLanguage.ptBR;
  private subscription = new Subscription();

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.currentLang = this.translateService.currentLang as AvailableLanguage;
    this.subscription.add(
      this.translateService.onLangChange.subscribe((newLang) => {
        this.currentLang = newLang.lang as AvailableLanguage;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public changeLanguage() {
    switch (this.currentLang) {
      case AvailableLanguage.ptBR:
        this.translateService.use(AvailableLanguage.enUS);
        break;
      case AvailableLanguage.enUS:
        this.translateService.use(AvailableLanguage.ptBR);
        break;
    }
  }
}
