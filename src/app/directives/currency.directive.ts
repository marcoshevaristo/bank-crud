import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { currencies } from 'src/constants';

@Directive({ selector: '[currency]' })
export class CurrencyDirective implements OnInit {
  private lastValue = 0;
  private element: HTMLElement;

  @Input()
  public set currency(_currency: number) {
    if (typeof _currency === 'number') {
      this.lastValue = _currency;
      this.element.innerHTML = this.formatValue(Number(_currency));
    }
  }

  constructor(private host: ElementRef, private translateService: TranslateService) {
    this.element = host.nativeElement;
  }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((newLang) => {
      this.element.innerHTML = this.formatValue(Number(this.lastValue));
    });
  }

  private formatValue(value: number) {
    return value.toLocaleString(this.translateService.currentLang, {
      currency: currencies[this.translateService.currentLang],
      style: 'currency',
    });
  }
}
