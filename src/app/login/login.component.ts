import {Component, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Message} from '../popup/Message.enum';
import {Role} from './Role.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnDestroy {
  authenticationSubscription;
  error = '';
  errorLogin: boolean;
  errorPassword: boolean;
  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
              private router: Router, private authenticationService: AuthenticationService, private snackBar: MatSnackBar) {
    if (this.authenticationService.currentUserValue) {
      this.redirectUser();
    }
    this.errorLogin = false;
    this.errorPassword = false;
  }

  onSubmit() {
    this.authenticationSubscription = this.authenticationService.login(this.loginForm.controls.login.value, this.loginForm.controls.password.value).subscribe(response => {
      if (this.authenticationService.currentUserValue) {
        this.snackBar.open(Message.authorizationSuccess, 'X', {
          panelClass: ['successPopup'],
          duration: 5000,
        });
        this.redirectUser();

      } else if (response.status === 401) {
        this.checkError(response.error.message);
        this.snackBarError(response.error.message);
      } else {
        this.snackBarError(Message.noActiveCompanies);
      }
    });
  }

  redirectUser() {
    const tokenData = this.authenticationService.tokenParse();
    (tokenData.userRoles.find(role => role.role === Role.systemAdmin)) ? this.router.navigate(['/companies']) :
      (tokenData.userRoles.find(role => role.role === Role.companyAdmin)) ? this.router.navigate(['/users']) :
        (tokenData.userRoles.find(role => role.role === Role.dispatcher)) ? this.router.navigate(['/warehouses']) :
          (tokenData.userRoles.find(role => role.role === Role.manager)) ? this.router.navigate(['/consignment-notes']) : this.router.navigate(['/login']);
  }

  snackBarError(response) {
    this.snackBar.open(response, 'X', {
      panelClass: ['errorPopup'],
      duration: 5000
    });
  }

  checkError(response) {
    if (response === Message.noLoginAndPassword) {
      this.errorLogin = true;
      this.errorPassword = true;
    } else if (response === Message.noLogin) {
      this.errorLogin = true;
    } else {
      this.errorPassword = true;
    }
  }

  changesLogin() {
    if (this.errorLogin === true) {
      this.errorLogin = false;
    }
  }

  changesPassword() {
    if (this.errorPassword === true) {
      this.errorPassword = false;
    }
  }

  ngOnDestroy() {
    if (this.authenticationSubscription) {
      this.authenticationSubscription.unsubscribe();
      this.authenticationSubscription = null;
    }
  }
}
