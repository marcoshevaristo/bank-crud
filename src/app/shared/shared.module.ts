import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { DirectivesModule } from '../directives/directives.module';
@NgModule({
  exports: [CommonModule, TranslateModule, DirectivesModule, FormsModule, MatSnackBarModule, MatButtonModule],
})
export class SharedModule {}
