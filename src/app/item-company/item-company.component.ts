import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {StatusCompany} from './statusCompany.enum';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-item-company',
  templateUrl: './item-company.component.html',
  styleUrls: ['./item-company.component.less']
})
export class ItemCompanyComponent implements OnInit, OnDestroy {
  @Input() company;
  private buttonStatus: string;
  subscription;

  constructor(public dialog: MatDialog,
              private companyService: CompanyService) {
  }

  ngOnInit() {
    this.changeStatusButton();
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: 'You definitely want to change the status of the company?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.changeStatus();
      }
    });
  }

  changeStatus() {
    this.subscription = this.companyService.putCompanyStatus(this.company.id).subscribe((response) => {
      return response;
    });
    this.company.status = (this.company.status === StatusCompany.companyActive) ? StatusCompany.companySuspended : StatusCompany.companyActive;
    this.changeStatusButton();
  }

  changeStatusButton() {
    this.buttonStatus = (this.company.status === StatusCompany.companyActive) ? StatusCompany.buttonSuspend : StatusCompany.buttonResume;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
