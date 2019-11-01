import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-item-ware-owners',
  templateUrl: './item-ware-owners.component.html',
  styleUrls: ['./item-ware-owners.component.less']
})
export class ItemWareOwnersComponent {
  @Input() wareOwner;
  @Output() onDelete = new EventEmitter<string>();

  constructor(private authenticationService: AuthenticationService) {
  }

  deleteWareOwner(id: string): void {
    this.onDelete.emit(id);
  }
}
