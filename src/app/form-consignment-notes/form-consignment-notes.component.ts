import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ConsignmentNotesService} from '../consignment-notes.service';
import {Message} from '../popup/Message.enum';
import {FieldForm} from '../fieldForm.enum';
import {AuthenticationService} from '../authentication.service';
import {VehicleService} from '../vehicle.service';
import {UserService} from '../user.service';
import {WareOwnerService} from '../wareOwner.service';


@Component({
  selector: 'app-form-consignment-notes',
  templateUrl: './form-consignment-notes.component.html',
  styleUrls: ['./form-consignment-notes.component.less']
})

export class FormConsignmentNotesComponent implements OnDestroy, OnInit {
  subscription;
  vehicleList$;
  driversList$;
  wareOwnersList$;
  errorConsignmentNoteNumber = false;
  number = FieldForm.number;
  name = FieldForm.name;
  amount = FieldForm.amount;
  weight = FieldForm.weight;
  companyId: number;
  id: number;
  add = true;
  edit = false;
  href = false;
  wareOwner;

  formConsignmentNotes = new FormGroup({
    number: new FormControl('', Validators.required),
    wareOwner: new FormControl('', Validators.required),
    wares: new FormArray([
      new FormGroup({
        name: new FormControl('', Validators.required),
        weight: new FormControl('', Validators.required),
        amount: new FormControl('', Validators.required)
      })]),
    vehicle: new FormControl('', Validators.required),
    driver: new FormControl('', Validators.required)
  });

  constructor(
    private consignmentNotes: ConsignmentNotesService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private vehicleService: VehicleService,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private wareOwnerService: WareOwnerService
  ) {
  }

  ngOnInit() {
    this.companyId = this.authenticationService.tokenParse().companyId;

    this.vehicleList$ = this.vehicleService.getVehiclesByCompanyId(this.companyId);
    this.driversList$ = this.userService.getDriversByCompanyId(this.companyId);
    this.wareOwnersList$ = this.wareOwnerService.getWareOwners();

    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');

      if (this.router.url !== '/consignment-notes/add') {
        this.href = true;
        this.edit = true;
        this.add = false;
        this.getConsignmentNote(this.id);
        this.formConsignmentNotes.get('number').disable();
        this.formConsignmentNotes.get('wareOwner').disable();
      }
    });

  }

  get wares(): any {
    return this.formConsignmentNotes.get('wares');
  }

  addWare() {
    const wares = this.wares as FormArray;
    wares.push(new FormGroup({
      name: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required)
    }));
  }

  deleteWare(index: number) {
    const wares = this.wares as FormArray;
    wares.removeAt(index);
  }

  addConsignmentNote() {
    this.formConsignmentNotes.value.companyId = this.companyId;
    this.subscription = this.consignmentNotes.addConsignmentNote(this.formConsignmentNotes.value).subscribe((response) => {
      if (response.status === 409) {
        this.checkError(response.error.message);
        this.snackBarError(response.error.message);
      } else if (response.error) {
        this.snackBarError(response.error.message);
      } else if (response.status === 200) {
        this.snackBar.open(Message.submitConsignmentNote, 'X', {
          panelClass: ['successPopup'],
          duration: 5000
        });
        this.router.navigate(['/consignment-notes']).then();
      } else {
        this.snackBarError(Message.noConnection);
      }
    });
  }

  getConsignmentNote(id) {
    this.subscription = this.consignmentNotes.getConsignmentNoteById(id).subscribe(response => {
      this.patchForm(response);
    });
  }

  patchForm(consignmentNote) {
    const wares = this.wares as FormArray;
    this.formConsignmentNotes.patchValue({
      number: consignmentNote.number,
      wareOwner: consignmentNote.wareOwner,
      vehicle: consignmentNote.vehicle,
      driver: consignmentNote.driver,
      wares: [consignmentNote.consignmentNoteWares[0]]
    });

    consignmentNote.consignmentNoteWares.forEach((nameWare, i) => {
        if (i > 0) {
          wares.push(new FormGroup({
              name: new FormControl(nameWare.name, Validators.required),
              weight: new FormControl(nameWare.weight, Validators.required),
              amount: new FormControl(nameWare.amount, Validators.required)
            })
          );
        }
      }
    );
  }

  editConsignmentNote() {
    this.formConsignmentNotes.value.id = this.id;
    this.subscription = this.consignmentNotes.editConsignmentNote(this.formConsignmentNotes.value).subscribe((response) => {
      if (response.status === 409) {
        this.checkError(response.error.message);
        this.snackBarError(response.error.message);
      } else if (response.error) {
        this.snackBarError(response.error.message);
      } else if (response.status === 200) {
        this.snackBar.open(Message.editConsignmentNote, 'X', {
          panelClass: ['successPopup'],
          duration: 5000
        });
        this.router.navigate(['/consignment-notes']).then();
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
    if (response === Message.consignmentNoteNumber) {
      this.errorConsignmentNoteNumber = true;
    }
  }

  changesName() {
    if (this.errorConsignmentNoteNumber === true) {
      this.errorConsignmentNoteNumber = false;
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
