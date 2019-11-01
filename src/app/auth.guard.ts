import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const tokenData = this.authenticationService.tokenParse();
    this.authenticationService.setRoles(tokenData);

    if (tokenData) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}