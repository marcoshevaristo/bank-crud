import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBusiness } from '../models/business.model';

@Injectable()
export class BankBranchService {
  private readonly baseUrl = `${environment.apiUrl}/itau_teste`;
  constructor(private http: HttpClient, private snackbar: MatSnackBar, private translateService: TranslateService) {}

  public getBankBranchesList(): Observable<IBusiness[]> {
    return this.http.get<IBusiness[]>(`${this.baseUrl}`);
  }

  public getBankBranchDetail(bankBranchId: number): Observable<IBusiness> {
    return this.http.get<IBusiness>(`${this.baseUrl}/${bankBranchId}`);
  }

  public saveBankBranch(bankBranch: IBusiness) {
    const headers = new HttpHeaders({ delay: '2000' });
    return this.http.get<IBusiness>(`${this.baseUrl}/${bankBranch.id}`, { headers }).subscribe((response) => {
      this.snackbar.open(this.translateService.instant('bank_branches_view.submit_success'), null, { duration: 3000 });
    });
  }
}
