import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IBusiness } from 'src/app/models/business.model';
import { BankBranchService } from 'src/app/services/bank-branch.service';
import { DROPDOWN_BOOOLEAN_OPTIONS, POSTAL_CODE_MASK, TAX_ID_MASK } from 'src/constants';
declare var require: any;
const cep = require('cep-promise');

@Component({
  selector: 'app-bank-branches-view',
  templateUrl: './bank-branches-view.component.html',
  styleUrls: ['./bank-branches-view.component.scss'],
})
export class BankBranchesViewComponent implements OnInit {
  public bankBranch: IBusiness;
  public formGroup: FormGroup = new FormGroup({
    id: new FormControl(undefined),
    active: new FormControl(true),
    business: new FormControl(undefined, Validators.required),
    cep: new FormControl(undefined, Validators.required),
    street: new FormControl(undefined, Validators.required),
    neighborhood: new FormControl(undefined, Validators.required),
    state: new FormControl(undefined, Validators.required),
    city: new FormControl(undefined, Validators.required),
    cnpj: new FormControl(undefined, Validators.required),
    name: new FormControl(undefined, Validators.required),
    valuation: new FormControl(0, Validators.required),
  });
  public postalCodeMask = POSTAL_CODE_MASK;
  public taxIdMask = TAX_ID_MASK;
  public dropdownBooleanOptions = DROPDOWN_BOOOLEAN_OPTIONS;
  public isReadonly = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private translateService: TranslateService,
    private router: Router,
    private bankBranchService: BankBranchService
  ) {
    this.initFormGroup();
    this.isReadonly = this.activatedRoute.snapshot.url[0].path !== 'edit';
  }

  ngOnInit(): void {
    this.bankBranch = this.activatedRoute.snapshot.data['bankBranchDetail'];
    this.formGroup.patchValue(this.bankBranch);
    if (this.isReadonly) {
      this.formGroup.disable();
    } else {
      this.searchPostalCode();
    }
  }

  public searchPostalCode() {
    if (this.formGroup.get('cep').valid) {
      cep(this.formGroup.get('cep').value).then(
        (response) => {
          this.formGroup.patchValue(response);
          this.disableZipcodeFields();
        },
        (error) => {
          this.snackBar.open(this.translateService.instant('bank_branches_view.address.cep_service_error'), null, {
            duration: 3000,
          });
          this.enableZipcodeFields();
          this.clearZipcodeFields();
        }
      );
    }
  }

  public goBack() {
    this.router.navigate(['bank-branches', 'list']);
  }

  public onSubmit() {
    if (this.formGroup.valid) {
      this.bankBranchService.saveBankBranch(this.formGroup.getRawValue());
    }
  }

  private initFormGroup() {
    this.formGroup = new FormGroup({
      id: new FormControl(undefined),
      active: new FormControl(true),
      business: new FormControl(undefined, Validators.required),
      cep: new FormControl(undefined, Validators.required),
      street: new FormControl(undefined, Validators.required),
      neighborhood: new FormControl(undefined, Validators.required),
      state: new FormControl(undefined, Validators.required),
      city: new FormControl(undefined, Validators.required),
      cnpj: new FormControl(undefined, Validators.required),
      name: new FormControl(undefined, Validators.required),
      valuation: new FormControl(0, Validators.required),
    });
  }

  private enableZipcodeFields() {
    this.formGroup.get('street').enable();
    this.formGroup.get('neighborhood').enable();
    this.formGroup.get('state').enable();
    this.formGroup.get('city').enable();
  }

  private disableZipcodeFields() {
    this.formGroup.get('street').disable();
    this.formGroup.get('neighborhood').disable();
    this.formGroup.get('state').disable();
    this.formGroup.get('city').disable();
  }

  private clearZipcodeFields() {
    this.formGroup.get('street').reset();
    this.formGroup.get('neighborhood').reset();
    this.formGroup.get('state').reset();
    this.formGroup.get('city').reset();
  }
}
