import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBusiness } from 'src/app/models/business.model';

@Component({
  selector: 'app-bank-branches-view',
  templateUrl: './bank-branches-view.component.html',
  styleUrls: ['./bank-branches-view.component.scss'],
})
export class BankBranchesViewComponent implements OnInit {
  public bankBranch: IBusiness;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.bankBranch = this.activatedRoute.snapshot.data['bankBranchDetail'];
  }
}
