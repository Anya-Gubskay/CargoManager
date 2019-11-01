import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {WareOwnerService} from '../wareOwner.service';
import {Message} from '../popup/Message.enum';
import {FieldForm} from '../fieldForm.enum';

@Component({
  selector: 'app-form-ware-owner',
  templateUrl: './form-ware-owner.component.html',
  styleUrls: ['./form-ware-owner.component.less']
})
export class FormWareOwnerComponent implements OnInit, OnDestroy {
  formWareOwner = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      house: new FormControl('', Validators.required),
      office: new FormControl('')
    }),
  });
  subscription;
  url: string;
  id: number;
  add = true;
  edit = false;
  errorName = false;
  errorEmail = false;
  name = FieldForm.name;
  email = FieldForm.email;
  phone = FieldForm.phone;
  city = FieldForm.city;
  street = FieldForm.street;
  house = FieldForm.house;
  errorMargin = true;

  constructor(
    private wareOwnerService: WareOwnerService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');

      if (this.router.url !== '/wareOwners/add') {
        this.edit = true;
        this.add = false;
        this.getWareOwnerById(this.id);
      }
    });
  }

  getWareOwnerById(id) {
    this.subscription = this.wareOwnerService.getWareOwnerById(id).subscribe(response => {
      this.patchForm(response);
    });
  }

  get address(): object {
    return this.formWareOwner.get('address');
  }

  patchForm(wareOwner) {
    this.formWareOwner.patchValue({
      ...wareOwner,
      address: wareOwner.wareOwnerAddress,
    });
  }

  addWareOwner() {
    this.subscription = this.wareOwnerService.addWareOwner(this.formWareOwner.value).subscribe(response => {
      if (response.status === 409) {
        this.checkError(response.error.message);
        this.snackBarError(response.error.message);
      } else if (response.error) {
        this.snackBarError(response.error.message);
      } else if (response.status === 200) {
        this.snackBar.open(Message.submitWareOwner, 'X', {
          panelClass: ['successPopup'],
          duration: 5000
        });
        this.router.navigate(['/wareOwners']).then();
      } else {
        this.snackBarError(Message.noConnection);
      }
    });
  }

  editWareOwner() {
    this.subscription = this.wareOwnerService.editWareOwner(this.formWareOwner.value, this.id).subscribe(response => {
      if (response.status === 409) {
        this.checkError(response.error.message);
        this.snackBarError(response.error.message);
      } else if (response.error) {
        this.snackBarError(response.error.message);
      } else if (response.status === 200) {
        this.snackBar.open(Message.editWareOwner, 'X', {
          panelClass: ['successPopup'],
          duration: 5000
        });
        this.router.navigate(['/wareOwners']).then();
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
    if (response === Message.noNameWareOwner) {
      this.errorName = true;
    } else {
      this.errorEmail = true;
    }
  }

  changesEmail() {
    if (this.errorEmail === true) {
      this.errorEmail = false;
    }
  }

  changesName() {
    if (this.errorName === true) {
      this.errorName = false;
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
