import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { SharedModule } from '../shared.module';
import { CurrencyFieldComponent } from './currency-field/currency-field.component';
import { DropdownFieldComponent } from './dropdown-field/dropdown-field.component';
import { TextFieldComponent } from './text-field/text-field.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [TextFieldComponent, CurrencyFieldComponent, DropdownFieldComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
    NgxMaskModule.forChild(),
    CurrencyMaskModule,
    MatSelectModule,
  ],
  exports: [TextFieldComponent, CurrencyFieldComponent, DropdownFieldComponent],
})
export class FieldsModule {}
