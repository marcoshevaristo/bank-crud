import { NgModule } from '@angular/core';
import { CurrencyDirective } from './currency.directive';

@NgModule({
  declarations: [CurrencyDirective],
  exports: [CurrencyDirective],
})
export class DirectivesModule {}
