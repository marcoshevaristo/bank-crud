import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { IBusiness } from '../models/business.model';
import { BankBranchService } from '../services/bank-branch.service';

@Injectable()
export class BankBranchesDetailResolver implements Resolve<IBusiness> {
  constructor(private bankBranchService: BankBranchService) {}

  resolve(routeSnapshot: ActivatedRouteSnapshot) {
    return this.bankBranchService.getBankBranchDetail(routeSnapshot.params['id']);
  }
}
