import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    standalone: false
})
export class FooterComponent implements OnInit {

  fecha = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
