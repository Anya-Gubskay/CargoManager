import {Component} from '@angular/core';
import {AuthenticationService} from '../../authentication.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent {
  constructor(public router: Router, private authenticationService: AuthenticationService) {
  }

  logout() {
    this.authenticationService.logout();
  }
}
