import {Component, OnDestroy, OnInit} from '@angular/core';
import {WarehouseService} from '../warehouse.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Message} from '../popup/Message.enum';

@Component({
  selector: 'app-form-warehouse',
  templateUrl: './form-warehouse.component.html',
  styleUrls: ['./form-warehouse.component.less']
})

export class FormWarehouseComponent implements OnDestroy, OnInit {
  formWarehouse: FormGroup;
  subscription;
  href: boolean;
  warehouse: {};
  url: string;
  id: number;
  warehouseItem: any;
  add: boolean;
  edit: boolean;
  errorName: boolean;
  errorPhone: boolean;

  constructor(private warehouseService: WarehouseService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar) {
    this._createForm();
    this.href = false;
    this.warehouseItem = '';
    this.add = true;
    this.edit = false;
    this.errorName = false;
    this.errorPhone = false;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');

      if (this.router.url !== '/warehouses/add') {
        this.href = true;
        this.edit = true;
        this.add = false;
        this.getWarehouse(this.id);
      }
    });
  }

  getWarehouse(id) {
    this.subscription = this.warehouseService.getWarehouseById(id).subscribe(warehouseItem => this.patchForm(warehouseItem));
  }

  public _createForm() {
    this.formWarehouse = new FormGroup({
      warehouseName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }

  patchForm(warehouse) {
    this.formWarehouse.patchValue({
      ...warehouse
    });
  }

  addWarehouse() {
    this.subscription = this.warehouseService.postWarehouse(this.formWarehouse.value).subscribe((response) => {
      if (response.status === 200) {
        this.snackBar.open(Message.submitWarehouse, 'X', {
          panelClass: ['successPopup'],
          duration: 5000
        });
        this.router.navigate(['/warehouses']).then();
      } else if (response.status === 409) {
        this.checkError(response.error.message);
        this.snackBarError(response.error.message);
      } else if (response.error) {
        this.snackBarError(response.error.message);
      } else {
        this.snackBarError(Message.noConnection);
      }
    });
  }

  editWarehouse() {
    this.subscription = this.warehouseService.putWarehouse(this.formWarehouse.value, this.id).subscribe((response) => {
      if (response.status === 200) {
        this.snackBar.open(Message.editWarehouse, 'X', {
          panelClass: ['successPopup'],
          duration: 5000
        });
        this.router.navigate(['/warehouses']).then();
      } else if (response.status === 409) {
        this.checkError(response.error.message);
        this.snackBarError(response.error.message);
      } else if (response.error) {
        this.snackBarError(response.error.message);
      } else {
        this.snackBarError(Message.noConnection);
      }
    });
  }

  snackBarError(response) {
    this.snackBar.open(response, 'X', {
      panelClass: ['errorPopup'],
      duration: 5000
    });
  }

  checkError(response) {
    if (response === Message.warehouseName) {
      this.errorName = true;
    }
  }

  changesName() {
    if (this.errorName === true) {
      this.errorName = false;
    }
  }

  changesPhone() {
    if (this.errorPhone === true) {
      this.errorPhone = false;
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
