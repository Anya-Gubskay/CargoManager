import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from '../user.service';
import {Message} from '../popup/Message.enum';
import {ButtonText} from '../buttonText.enum';
import {FieldForm} from '../fieldForm.enum';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.less']
})
export class FormUserComponent implements OnInit, OnDestroy {
  formUser = new FormGroup({
    surname: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    patronymic: new FormControl(''),
    role: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    address: new FormGroup({
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      house: new FormControl('', Validators.required),
      office: new FormControl('')
    }),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
    dateOfBirth: new FormControl('')
  });
  subscription;
  user: {};
  href = false;
  url: string;
  id: number;
  companyId: number;
  add = true;
  edit = false;
  reset = true;
  showPassword = false;
  errorUserName = false;
  errorEmail = false;
  oldPassword: string;
  buttonReset = ButtonText.showReset;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  surname = FieldForm.surname;
  name = FieldForm.name;
  email = FieldForm.email;
  phone = FieldForm.phone;
  city = FieldForm.city;
  street = FieldForm.street;
  house = FieldForm.house;
  username = FieldForm.username;
  password = FieldForm.password;
  errorMargin = true;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.companyId = this.authenticationService.tokenParse().companyId;
    if (this.router.url === '/users/add') {
      this.reset = false;
      this.showPassword = true;
    }

    this.dropdownList = [
      {id: 3, role: 'dispatcher'},
      {id: 4, role: 'manager'},
      {id: 5, role: 'driver'}
    ];

    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'role',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: this.dropdownList.length,
      allowSearchFilter: false
    };
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');

      if (this.router.url !== '/users/add') {
        this.href = true;
        this.edit = true;
        this.add = false;
        this.getUser(this.id);
      }
    });
  }

  onItemSelect(item: any) {
  }

  onSelectAll(items: any) {
  }

  getUser(id) {
    this.subscription = this.userService.getUserById(id).subscribe(response => {
      this.patchForm(response);
    });
  }

  get address(): object {
    return this.formUser.get('address');
  }

  patchForm(user) {
    this.formUser.patchValue({
      ...user,
      address: user.userAddress,
      role: user.userRoles,
      password: '       '
    });
  }

  addUser() {
    this.formUser.value.companyId = this.companyId;
    this.subscription = this.userService.addUser(this.formUser.value).subscribe((response) => {
      if (response.status === 200) {
        this.snackBar.open(Message.submitUser, 'X', {
          panelClass: ['successPopup'],
          duration: 5000
        });
        this.router.navigate(['/users']).then();
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

  editUser() {
    this.subscription = this.userService.editUser(this.formUser.value, this.id).subscribe((response) => {
      if (response.status === 200) {
        this.snackBar.open(Message.editUser, 'X', {
          panelClass: ['successPopup'],
          duration: 5000
        });
        this.router.navigate(['/users']).then();
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


  resetPassword() {
    if (this.buttonReset === ButtonText.showReset) {
      this.showPassword = true;
      this.buttonReset = ButtonText.hideReset;
      this.oldPassword = this.formUser.value.password;
      this.formUser.patchValue({password: ''});
    } else {
      this.showPassword = false;
      this.buttonReset = ButtonText.showReset;
      this.formUser.patchValue({password: this.oldPassword});
    }
    this.userService.editUser(this.formUser.value, this.id);
  }

  snackBarError(response) {
    this.snackBar.open(response, 'X', {
      panelClass: ['errorPopup'],
      duration: 5000
    });
  }

  checkError(response) {
    if (response === Message.userLogin) {
      this.errorUserName = true;
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
    if (this.errorUserName === true) {
      this.errorUserName = false;
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
