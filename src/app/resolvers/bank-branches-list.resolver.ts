import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { IBusiness } from '../models/business.model';
import { BankBranchService } from '../services/bank-branch.service';

@Injectable()
export class BankBranchesListResolver implements Resolve<IBusiness[]> {
  constructor(private bankBranchService: BankBranchService) {}

  resolve() {
    return this.bankBranchService.getBankBranchesList();
  }
}
