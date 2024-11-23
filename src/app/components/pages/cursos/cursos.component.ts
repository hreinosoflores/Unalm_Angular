import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-cursos',
    template: `<router-outlet></router-outlet>`,
    standalone: false
})
export class CursosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
