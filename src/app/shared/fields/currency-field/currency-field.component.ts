import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AvailableLanguage } from 'src/app/models/available-language.enum';
import { CurrencyOptions } from 'src/app/models/currency-options.model';

@Component({
  selector: 'app-currency-field',
  templateUrl: './currency-field.component.html',
  styleUrls: ['./currency-field.component.scss'],
})
export class CurrencyFieldComponent implements OnInit {
  @Input()
  public control: FormControl;
  @Input()
  public label: string;
  @Input()
  public style: string;
  @Output()
  public onBlur = new EventEmitter();

  public currencyOptions: CurrencyOptions;

  constructor(private translateService: TranslateService) {
    this.currencyOptions = this.getCurrencyOptions(this.translateService.currentLang as AvailableLanguage);
    this.translateService.onLangChange.subscribe((newLang) => {
      this.currencyOptions = this.getCurrencyOptions(newLang.lang as AvailableLanguage);
    });
  }

  ngOnInit(): void {}

  private getCurrencyOptions(lang: AvailableLanguage) {
    switch (lang) {
      case AvailableLanguage.ptBR:
        return {
          align: 'left',
          allowNegative: true,
          decimal: ',',
          precision: 2,
          prefix: 'R$ ',
          suffix: '',
          thousands: '.',
        };
      case AvailableLanguage.enUS:
        return {
          align: 'left',
          allowNegative: true,
          decimal: '.',
          precision: 2,
          prefix: '$ ',
          suffix: '',
          thousands: ',',
        };
    }
  }
}
