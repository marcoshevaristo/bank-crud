import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  exports: [CommonModule, TranslateModule, DirectivesModule],
})
export class SharedModule {}
