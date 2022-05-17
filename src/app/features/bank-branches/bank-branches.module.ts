import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BankBranchesListComponent } from './list/bank-branches-list.component';
import { BankBranchesViewComponent } from './view/bank-branches-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: BankBranchesListComponent,
  },
  {
    path: 'new',
    component: BankBranchesViewComponent,
  },
  {
    path: 'view/:id',
    component: BankBranchesViewComponent,
  },
  {
    path: 'edit/:id',
    component: BankBranchesViewComponent,
  },
];

@NgModule({
  declarations: [BankBranchesListComponent, BankBranchesViewComponent],
  imports: [SharedModule, RouterModule.forChild(routes), MatTableModule, MatIconModule, MatPaginatorModule],
})
export class BankBranchesModule {}
