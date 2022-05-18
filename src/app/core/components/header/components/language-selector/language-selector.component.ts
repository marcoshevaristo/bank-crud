import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AvailableLanguage } from 'src/app/models/available-language.enum';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  public currentLang: AvailableLanguage = AvailableLanguage.ptBR;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.currentLang = this.translateService.currentLang as AvailableLanguage;
    this.translateService.onLangChange.subscribe((newLang) => {
      this.currentLang = newLang.lang as AvailableLanguage;
    });
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
