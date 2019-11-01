import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.less']
})
export class ValidationMessagesComponent implements OnInit {
  @Input() controlName;
  @Input() errorField = false;
  @Input() nameField;
  @Input() errorMargin = false;

  constructor() {
  }

  ngOnInit() {
  }

}
