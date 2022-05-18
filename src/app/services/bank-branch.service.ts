import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBusiness } from '../models/business.model';

@Injectable()
export class BankBranchService {
  private readonly baseUrl = `${environment.apiUrl}/itau_teste`;
  constructor(private http: HttpClient) {}

  public getBankBranchesList(): Observable<IBusiness[]> {
    return this.http.get<IBusiness[]>(`${this.baseUrl}`);
  }

  public getBankBranchDetail(bankBranchId: number): Observable<IBusiness> {
    return this.http.get<IBusiness>(`${this.baseUrl}/${bankBranchId}`);
  }
}
