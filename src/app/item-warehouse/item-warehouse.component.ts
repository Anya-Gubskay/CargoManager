import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-item-warehouse',
  templateUrl: './item-warehouse.component.html',
  styleUrls: ['./item-warehouse.component.less']
})

export class ItemWarehouseComponent implements OnInit {
  @Input() warehouse;
  @Output() onDelete = new EventEmitter<string>();

  constructor(private authenticationService: AuthenticationService) {
  }

  deleteWarehouse(id: string): void {
    this.onDelete.emit(id);
  }

  ngOnInit() {
  }
}
