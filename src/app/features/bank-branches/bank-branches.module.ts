import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { BankBranchesDetailResolver } from 'src/app/resolvers/bank-branches-detail.resolver';
import { BankBranchesListResolver } from 'src/app/resolvers/bank-branches-list.resolver';
import { BankBranchService } from 'src/app/services/bank-branch.service';
import { FieldsModule } from 'src/app/shared/fields/fields.module';
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
    resolve: {
      bankBranchesList: BankBranchesListResolver,
    },
  },
  {
    path: 'new',
    component: BankBranchesViewComponent,
  },
  {
    path: 'view/:id',
    component: BankBranchesViewComponent,
    resolve: {
      bankBranchDetail: BankBranchesDetailResolver,
    },
  },
  {
    path: 'edit/:id',
    component: BankBranchesViewComponent,
    resolve: {
      bankBranchDetail: BankBranchesDetailResolver,
    },
  },
];

@NgModule({
  declarations: [BankBranchesListComponent, BankBranchesViewComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatInputModule,
    FieldsModule,
  ],
  providers: [BankBranchService, BankBranchesListResolver, BankBranchesDetailResolver],
})
export class BankBranchesModule {}
