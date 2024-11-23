import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-confirm-alert',
    templateUrl: './confirm-alert.component.html',
    standalone: false
})
export class ConfirmAlertComponent implements OnInit {

  @Input() text: string;

  constructor() {
    this.text = '';
  }

  ngOnInit(): void {
  }

}
