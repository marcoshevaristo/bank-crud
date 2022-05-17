import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { currencies } from 'src/constants';

@Directive({ selector: '[currency]' })
export class CurrencyDirective implements OnInit, OnDestroy {
  private lastValue = 0;
  private subscription = new Subscription();
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
    this.subscription.add(
      this.translateService.onLangChange.subscribe((newLang) => {
        this.element.innerHTML = this.formatValue(Number(this.lastValue));
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private formatValue(value: number) {
    return value.toLocaleString(this.translateService.currentLang, {
      currency: currencies[this.translateService.currentLang],
      style: 'currency',
    });
  }
}
