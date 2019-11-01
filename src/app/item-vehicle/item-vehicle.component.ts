import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../authentication.service';


@Component({
  selector: 'app-item-vehicle',
  templateUrl: './item-vehicle.component.html',
  styleUrls: ['./item-vehicle.component.less']
})
export class ItemVehicleComponent implements OnInit {
  @Input() vehicle;
  @Output() onDelete = new EventEmitter<string>();

  constructor(private authenticationService: AuthenticationService) {
  }

  deleteUser(id: string): void {
    this.onDelete.emit(id);
  }

  ngOnInit() {
  }

}
