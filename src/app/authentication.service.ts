import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {User} from './table-user/user';
import {Router} from '@angular/router';
import {ErrorService} from './error.service';
import {UrlAddress} from './urlAddress';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Role} from './login/Role.enum';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public roles = {
    systemAdmin: {status: false, description: Role.systemAdmin},
    companyAdmin: {status: false, description: Role.companyAdmin},
    dispatcher: {status: false, description: Role.dispatcher},
    manager: {status: false, description: Role.manager},
    driver: {status: false, description: Role.driver}
  };

  constructor(private http: HttpClient, private  router: Router, private errorService: ErrorService, public jwtHelper: JwtHelperService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public tokenParse() {
    const [ , payload] = this.currentUserValue.token.split('.');
    return JSON.parse(this.jwtHelper.urlBase64Decode(payload));
  }

  public setRoles(tokenData) {
    for (let key in this.roles) {
      this.roles[key].status =!!(tokenData.userRoles.find(role => role.role === this.roles[key].description));
    }
  }

  login(login: string, password: string) {
    return this.http.post<any>(`${UrlAddress.BASE_URL}${UrlAddress.login}`, {login, password})
      .pipe(map(user => {
          if (user) {
            const [ , payload] = user.token.split('.');
            const tokenData = JSON.parse(this.jwtHelper.urlBase64Decode(payload));
            if (tokenData.status === 'Active' || !tokenData.status) {
              this.setRoles(tokenData);
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
            }
            return user;
          }
        }),
        catchError(err => {
          this.errorService.transformError(err);
          return of(err);
        }));
  }

  logout() {
    localStorage.clear();
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}
