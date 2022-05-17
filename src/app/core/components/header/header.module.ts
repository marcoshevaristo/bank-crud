import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [HeaderComponent, LanguageSelectorComponent, UserInfoComponent],
  exports: [HeaderComponent],
  imports: [SharedModule],
})
export class HeaderModule {}
