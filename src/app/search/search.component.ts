import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  @Output() onChange = new EventEmitter<string>();
  @Input()  searchName;
  constructor() { }

  ngOnInit() {
  }

  changeName(value): void {
    this.onChange.emit(value);
  }
}
