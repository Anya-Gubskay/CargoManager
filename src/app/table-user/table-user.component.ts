import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material';
import {FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.less']
})

export class TableUserComponent implements OnInit, OnDestroy {
  private subscription;
  public p: number | string = 1;
  private items: number | string = 10;
  private companyId: number;
  itemsNum: string[] = ['10', '20'];
  itemsPagination: FormGroup;
  savedParam: any;
  paginationParams: object = {p: this.p, items: this.items, companyId: this.companyId};
  public usersItems$;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
              private authenticationService: AuthenticationService) {
    this.itemsPagination = new FormGroup({
      itemsSelect: new FormControl(null)
    });
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: 'You definitely want to delete the user?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUserById(id);
      }
    });
  }

  deleteUserById(id: string) {
    this.subscription = this.userService.removeUser(id).subscribe((response) => {
      this.getPage(this.paginationParams);
      return response;
    });
  }

  changeItemsPerPage() {
    const valueSelect = this.itemsPagination.value.itemsSelect;
    this.paginationParams = {p: this.p, items: valueSelect, companyId: this.companyId};
    this.items = valueSelect || this.items;
    this.getPage(this.paginationParams);
    localStorage.setItem('parametersUsersPagination', JSON.stringify({p: this.p, items: valueSelect, companyId: this.companyId}));
    this.router.navigate(['/users', {p: this.p, items: this.items}]);
  }

  checkPaginationParams() {
    if (JSON.parse(localStorage.getItem('parametersUsersPagination')) === null) {
      this.setPaginationParams();
    } else {
      this.savedParam = JSON.parse(localStorage.getItem('parametersUsersPagination'));
      this.items = this.savedParam.items;
      this.paginationParams = {p: this.savedParam.p, items: this.savedParam.items, companyId: this.companyId};
      this.getPage(this.paginationParams);
      this.itemsPagination.controls.itemsSelect.setValue(`${this.items}`, {onlySelf: true});
    }
  }

  setPaginationParams() {
    this.items = this.route.snapshot.paramMap.get('items') || this.items;
    this.p = this.route.snapshot.paramMap.get('p') || this.p;
    this.paginationParams = {p: this.p, items: this.items, companyId: this.companyId};
    this.getPage(this.paginationParams);
    this.itemsPagination.controls.itemsSelect.setValue(`${this.items}`, {onlySelf: true});
  }

  ngOnInit() {
    this.companyId = this.authenticationService.tokenParse().companyId;
    this.checkPaginationParams();
  }

  getPage(paginationParams) {
    this.usersItems$ = this.userService.getPaginationItems(paginationParams);
  }

  pageChanged($event: number) {
    this.paginationParams = {p: $event, items: this.items, companyId: this.companyId};
    this.getPage(this.paginationParams);
    localStorage.setItem('parametersUsersPagination', JSON.stringify({p: $event, items: this.items, companyId: this.companyId}));
    this.router.navigate(['/users', {items: this.items, p: $event}]);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
