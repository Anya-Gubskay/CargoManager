import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-item-user',
  templateUrl: './item-user.component.html',
  styleUrls: ['./item-user.component.less']
})

export class ItemUserComponent {
  @Input() user;
  @Output() onDelete = new EventEmitter<string>();

  constructor() {
  }

  deleteUser(id: string): void {
    this.onDelete.emit(id);
  }
}

