import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {WareOwnerService} from '../wareOwner.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-table-ware-owners',
  templateUrl: './table-ware-owners.component.html',
  styleUrls: ['./table-ware-owners.component.less']
})
export class TableWareOwnersComponent implements OnInit, OnDestroy {
  private subscription;
  public p: number | string = 1;
  private items: number | string = 10;
  itemsNum: string[] = ['10', '20'];
  itemsPagination: FormGroup;
  savedParam: any;
  paginationParams: object = {p: this.p, items: this.items};
  public wareOwnerItems$;

  constructor(private wareOwnerService: WareOwnerService,
              private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              public dialog: MatDialog, private router: Router) {
    this.itemsPagination = new FormGroup({
      itemsSelect: new FormControl(null)
    });
  }

  ngOnInit() {
    this.checkPaginationParams();
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: 'You definitely want to delete the ware owner?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteWareOwnerById(id);
      }
    });
  }

  deleteWareOwnerById(id: string) {
    this.subscription = this.wareOwnerService.removeWareOwner(id).subscribe((response) => {
      this.getPage(this.paginationParams);
      return response;
    });
  }

  changeItemsPerPage() {
    const valueSelect = this.itemsPagination.value.itemsSelect;
    this.paginationParams = {p: this.p, items: valueSelect};
    this.items = valueSelect || this.items;
    this.getPage(this.paginationParams);
    localStorage.setItem('parametersWaresOwnersPagination', JSON.stringify({items: valueSelect, p: this.p}));
    this.router.navigate(['/wareOwners', {items: this.items, p: this.p}]);
  }

  checkPaginationParams() {
    if (JSON.parse(localStorage.getItem('parametersWaresOwnersPagination')) === null) {
      this.setPaginationParams();
    } else {
      this.savedParam = JSON.parse(localStorage.getItem('parametersWaresOwnersPagination'));
      this.items = this.savedParam.items;
      this.paginationParams = {p: this.savedParam.p, items: this.savedParam.items};
      this.getPage(this.paginationParams);
      this.itemsPagination.controls.itemsSelect.setValue(`${this.items}`, {onlySelf: true});
    }
  }

  setPaginationParams() {
    this.items = this.route.snapshot.paramMap.get('items') || this.items;
    this.p = this.route.snapshot.paramMap.get('p') || this.p;
    this.paginationParams = {p: this.p, items: this.items};
    this.getPage(this.paginationParams);
    this.itemsPagination.controls.itemsSelect.setValue(`${this.items}`, {onlySelf: true});
  }

  getPage(paginationParams) {
    this.wareOwnerItems$ = this.wareOwnerService.getPaginationItems(paginationParams);
  }

  pageChanged($event: number) {
    this.paginationParams = {p: $event, items: this.items};
    this.getPage(this.paginationParams);
    localStorage.setItem('parametersWaresOwnersPagination', JSON.stringify({p: $event, items: this.items}));
    this.router.navigate(['/wareOwners', {items: this.items, p: $event}]);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
