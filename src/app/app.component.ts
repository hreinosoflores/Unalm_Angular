import { Component } from '@angular/core';
import { ConfirmacionService } from './services/confirmacion.service';


@Component({
    selector: 'app-root',
    template: `
    <div id="app" class="d-flex flex-column">
      <app-header></app-header>
      <main class="container-fluid col-12 col-lg-8 mx-auto">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
    standalone: false
})
export class AppComponent {

  constructor(private confirmSvc: ConfirmacionService) {

  }

}
