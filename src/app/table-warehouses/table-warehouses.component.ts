import {Component, OnDestroy, OnInit} from '@angular/core';
import {WarehouseService} from '../warehouse.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-table-warehouses',
  templateUrl: './table-warehouses.component.html',
  styleUrls: ['./table-warehouses.component.less']
})

export class TableWarehousesComponent implements OnInit, OnDestroy {
  private subscription;
  public p: number | string = 1;
  private items: number | string = 10;
  itemsNum: string[] = ['10', '20'];
  itemsPagination: FormGroup;
  savedParam: any;
  paginationParams: object = {p: this.p, items: this.items};
  public warehousesItems$;

  constructor(private warehouseService: WarehouseService,
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
      data: 'You definitely want to delete the vehicle?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteVehicleById(id);
      }
    });
  }

  deleteVehicleById(id: string) {
    this.subscription = this.warehouseService.removeWarehouse(id).subscribe((response) => {
      this.getPage(this.paginationParams);
      return response;
    });
  }


  changeItemsPerPage() {
    const valueSelect = this.itemsPagination.value.itemsSelect;
    this.paginationParams = {p: this.p, items: valueSelect};
    this.items = valueSelect || this.items;
    this.getPage(this.paginationParams);
    localStorage.setItem('parametersWarehousesPagination', JSON.stringify({items: valueSelect, p: this.p}));
    this.router.navigate(['/warehouses', {items: this.items, p: this.p}]);
  }

  checkPaginationParams() {
    if (JSON.parse(localStorage.getItem('parametersWarehousesPagination')) === null) {
      this.setPaginationParams();
    } else {
      this.savedParam = JSON.parse(localStorage.getItem('parametersWarehousesPagination'));
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

  ngOnInit() {
    this.checkPaginationParams();
  }

  getPage(paginationParams) {
    this.warehousesItems$ = this.warehouseService.getPaginationItems(paginationParams);
  }

  pageChanged($event: number) {
    this.paginationParams = {p: $event, items: this.items};
    this.getPage(this.paginationParams);
    localStorage.setItem('parametersWarehousesPagination', JSON.stringify({p: $event, items: this.items}));
    this.router.navigate(['/warehouses', {items: this.items, p: $event}]);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
