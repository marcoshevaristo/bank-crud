import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class CustomMatPaginatorIntlProvider extends MatPaginatorIntl {
  constructor(private translateService: TranslateService) {
    super();

    this.translateService.onLangChange.subscribe(() => {
      this.translateLabels();
    });
    this.translateLabels();
  }

  getRangeLabel = (page, pageSize, length) => {
    if (!length || !pageSize) {
      return this.translateService.instant('material.paginator.totalizer', [0, length, length]);
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return this.translateService.instant('material.paginator.totalizer', [startIndex + 1, endIndex, length]);
  };

  private translateLabels() {
    super.itemsPerPageLabel = this.translateService.instant('material.paginator.items_per_page');
    super.nextPageLabel = this.translateService.instant('material.paginator.next_page');
    super.previousPageLabel = this.translateService.instant('material.paginator.previous_page');
    this.changes.next();
  }
}
