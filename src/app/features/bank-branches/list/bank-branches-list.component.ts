import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IBusiness } from 'src/app/models/business.model';

@Component({
  selector: 'app-bank-branches-list',
  templateUrl: './bank-branches-list.component.html',
  styleUrls: ['./bank-branches-list.component.scss'],
})
export class BankBranchesListComponent implements OnInit, AfterViewInit {
  public dataSource: MatTableDataSource<IBusiness> = new MatTableDataSource();
  public filteredDataSource: IBusiness[] = [];
  public columns = ['name', 'business', 'valuation', 'status', 'actions'];
  @ViewChild(MatPaginator)
  private matPaginator: MatPaginator;
  @ViewChild(MatSort)
  private sort: MatSort;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.dataSource.data = this.activatedRoute.snapshot.data['bankBranchesList'];
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.matPaginator;
    this.dataSource.sort = this.sort;
  }

  public editBranch(branch: IBusiness) {
    this.router.navigate(['..', 'edit', branch.id], { relativeTo: this.activatedRoute });
  }

  public viewBranch(branch: IBusiness) {
    this.router.navigate(['..', 'view', branch.id], { relativeTo: this.activatedRoute });
  }

  public getStatusIcon(itemActive: boolean) {
    if (itemActive) {
      return 'enabled';
    }
    return 'disabled';
  }
}
