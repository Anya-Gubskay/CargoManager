import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {VehicleService} from '../vehicle.service';
import {FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-table-vehicles',
  templateUrl: './table-vehicles.component.html',
  styleUrls: ['./table-vehicles.component.less']
})
export class TableVehiclesComponent implements OnInit, OnDestroy {
  private subscription;
  public p: number | string = 1;
  private items: number | string = 10;
  itemsNum: string[] = ['10', '20'];
  itemsPagination: FormGroup;
  savedParam: any;
  paginationParams: object = {p: this.p, items: this.items};
  public vehiclesItems$;

  constructor(private vehicleService: VehicleService, private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {
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
      data: 'You definitely want to delete the vehicle?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteVehicleById(id);
      }
    });
  }

  deleteVehicleById(id: string) {
    this.subscription = this.vehicleService.removeVehicle(id).subscribe((response) => {
      this.getPage(this.paginationParams);
      return response;
    });
  }

  changeItemsPerPage() {
    const valueSelect = this.itemsPagination.value.itemsSelect;
    this.paginationParams = {p: this.p, items: valueSelect};
    this.items = valueSelect || this.items;
    this.getPage(this.paginationParams);
    localStorage.setItem('parametersVehiclesPagination', JSON.stringify({items: valueSelect, p: this.p}));
    this.router.navigate(['/vehicles', {items: this.items, p: this.p}]);
  }

  checkPaginationParams() {
    if (JSON.parse(localStorage.getItem('parametersVehiclesPagination')) === null) {
      this.setPaginationParams();
    } else {
      this.savedParam = JSON.parse(localStorage.getItem('parametersVehiclesPagination'));
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
    const token = this.authenticationService.tokenParse();
    this.vehiclesItems$ = this.vehicleService.getPaginationItems(paginationParams, token.companyId);
  }

  pageChanged($event: number) {
    this.paginationParams = {p: $event, items: this.items};
    this.getPage(this.paginationParams);
    localStorage.setItem('parametersVehiclesPagination', JSON.stringify({p: $event, items: this.items}));
    this.router.navigate(['/vehicles', {items: this.items, p: $event}]);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
