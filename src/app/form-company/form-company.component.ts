import {Component, OnDestroy, OnInit} from '@angular/core';
import {CompanyService} from '../company.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Message} from '../popup/Message.enum';
import {ButtonText} from '../buttonText.enum';
import {FieldForm} from '../fieldForm.enum';

@Component({
  selector: 'app-form-company',
  templateUrl: './form-company.component.html',
  styleUrls: ['./form-company.component.less']
})

export class FormCompanyComponent implements OnDestroy, OnInit {
  formCompany = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormGroup({
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      house: new FormControl('', Validators.required),
      office: new FormControl('')
    }),
    contact: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    admin: new FormGroup({
      surname: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      patronymic: new FormControl(''),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(7)])
    }),
  });

  subscription;
  href = false;
  company: {};
  url: string;
  id;
  reset = false;
  add = true;
  edit = false;
  showPassword = true;
  buttonReset = ButtonText.showReset;
  errorName = false;
  errorEmail = false;
  errorNameAdmin = false;
  errorEmailAdmin = false;
  oldPassword: string;
  city = FieldForm.city;
  surname = FieldForm.surname;
  name = FieldForm.name;
  phone = FieldForm.phone;
  email = FieldForm.email;
  username = FieldForm.username;
  password = FieldForm.password;
  street = FieldForm.street;
  house = FieldForm.house;
  contact = FieldForm.contact;
  errorMargin = true;

  constructor(private companyService: CompanyService,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');

      if (this.router.url !== '/companies/add') {
        this.href = true;
        this.showPassword = false;
        this.edit = true;
        this.reset = true;
        this.add = false;
        this.getCompany(this.id);
      }
    });
  }

  removeReadOnly(attr) {
    attr.currentTarget.removeAttribute('readonly');
  }

  getCompany(id) {
    this.subscription = this.companyService.getCompanyById(id).subscribe((response) => {
      this.patchForm(response);
    });
  }

  get address(): object {
    return this.formCompany.get('address');
  }

  get admin(): object {
    return this.formCompany.get('admin');
  }

  patchForm(company) {
    this.formCompany.patchValue({
      ...company.company,
      address: company.company.companyAddress,
      admin: company.admin
    });
    this.formCompany.get('admin').patchValue({password: '       '});
  }

  resetPassword() {
    if (this.buttonReset === ButtonText.showReset) {
      this.showPassword = true;
      this.buttonReset = ButtonText.hideReset;
      this.oldPassword = this.formCompany.value.admin.password;
      this.formCompany.get('admin').patchValue({password: ''});
    } else {
      this.showPassword = false;
      this.buttonReset = ButtonText.showReset;
      this.formCompany.get('admin').patchValue({password: this.oldPassword});
    }
    this.companyService.putCompany(this.formCompany.value, this.id);
  }

  addCompany() {
    this.subscription = this.companyService.postCompany(this.formCompany.value).subscribe((response) => {
      if (response.status === 200) {
        this.snackBar.open(Message.submitCompany, 'X', {
          panelClass: ['successPopup'],
          duration: 5000
        });
        this.router.navigate(['/companies']).then();
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
    this.subscription = this.companyService.putCompany(this.formCompany.value, this.id).subscribe((response) => {
      if (response.status === 200) {
        this.snackBar.open(Message.editCompany, 'X', {
          panelClass: ['successPopup'],
          duration: 5000
        });
        this.router.navigate(['/companies']).then();
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
    switch (true) {
      case (response === Message.companyName):
        this.errorName = true;
        break;
      case (response === Message.companyEmail):
        this.errorEmail = true;
        break;
      case (response === Message.userLogin):
        this.errorNameAdmin = true;
        break;
      case (response === Message.userEmail):
        this.errorEmailAdmin = true;
        break;
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

  changesEmailAdmin() {
    if (this.errorEmailAdmin === true) {
      this.errorEmailAdmin = false;
    }
  }

  changesNameAdmin() {
    if (this.errorNameAdmin === true) {
      this.errorNameAdmin = false;
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
