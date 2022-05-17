import { Component, OnInit } from '@angular/core';
import { IBusiness } from 'src/app/models/business.model';

@Component({
  selector: 'app-bank-branches-list',
  templateUrl: './bank-branches-list.component.html',
  styleUrls: ['./bank-branches-list.component.scss'],
})
export class BankBranchesListComponent implements OnInit {
  public dataSource: IBusiness[] = [
    {
      name: 'Teste',
      business: 'teste 1',
      valuation: 15054654,
      active: true,
      cep: '99999999',
      cnpj: '23654987456766',
      id: 1,
    },
  ];
  public columns = ['name', 'business', 'valuation', 'actions'];

  constructor() {}

  ngOnInit(): void {}

  public editBranch(branch: IBusiness) {}

  public viewBranch(branch: IBusiness) {}

  public sortData($event) {}
}
