import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public router: Router, private authenticationService: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRoles = route.data.expectedRoles;
    const tokenData = this.authenticationService.tokenParse();
    const currentRole = tokenData.userRoles.find(userRole => {
      return expectedRoles.find(expectedRole => expectedRole === userRole.role);
    });

    if (tokenData && currentRole) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}



