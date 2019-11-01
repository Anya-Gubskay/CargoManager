import {Component, OnDestroy, OnInit} from '@angular/core';
import {VehicleService} from '../vehicle.service';
import {AuthenticationService} from '../authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Message} from '../popup/Message.enum';
import {FieldForm} from '../fieldForm.enum';

@Component({
  selector: 'app-form-vehicle',
  templateUrl: './form-vehicle.component.html',
  styleUrls: ['./form-vehicle.component.less']
})
export class FormVehicleComponent implements OnDestroy, OnInit {
  formVehicle = new FormGroup({
    model: new FormControl('', Validators.required),
    consumption: new FormControl('', Validators.required),
    numberAuto: new FormControl('', Validators.required),
    bodyType: new FormControl('', Validators.required)
  });

  subscription;
  href = false;
  url: string;
  id;
  add = true;
  edit = false;
  model = FieldForm.model;
  consumption = FieldForm.consumption;
  numberAuto = FieldForm.numberAuto;
  bodyType = FieldForm.bodyType;
  errorNumber = false;

  constructor(private vehicleService: VehicleService,
              private authenticationService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');

      if (this.router.url !== '/vehicles/add') {
        this.href = true;
        this.edit = true;
        this.add = false;
        this.getVehicle(this.id);
      }
    });
  }

  getVehicle(id) {
    this.subscription = this.vehicleService.getVehicleById(id).subscribe((response) => {
      this.patchForm(response);
    });
  }

  patchForm(vehicle) {
    this.formVehicle.patchValue({
      model: vehicle.model,
      consumption: vehicle.consumption,
      numberAuto: vehicle.numberAuto,
      bodyType: vehicle.bodyType
    });
  }

  addCompany() {
    const token = this.authenticationService.tokenParse();
    this.subscription = this.vehicleService.addVehicle(this.formVehicle.value, token.companyId).subscribe((response) => {
      if (response.status === 200) {
        this.snackBar.open(Message.submitVehicle, 'X', {
          panelClass: ['successPopup'],
          duration: 5000
        });
        this.router.navigate(['/vehicles']).then();
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

  editCompany() {
    this.subscription = this.vehicleService.editVehicle(this.formVehicle.value, this.id).subscribe((response) => {
      if (response.status === 200) {
        this.snackBar.open(Message.editVehicle, 'X', {
          panelClass: ['successPopup'],
          duration: 5000
        });
        this.router.navigate(['/vehicles']).then();
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
    if (response === Message.vehicleNumber) {
      (this.errorNumber = true);
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
