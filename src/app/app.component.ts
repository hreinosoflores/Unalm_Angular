import { Component} from '@angular/core';
import { ConfirmacionService } from './services/confirmacion.service';


@Component({
  selector: 'app-root',
  template: `
    <div id="app" class="d-flex flex-column">
      <app-header></app-header>
      <main class="container-fluid">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `
})
export class AppComponent{

  get confirmText(){
    return this.confirmSvc.confirmText;
  }

  constructor(private confirmSvc:ConfirmacionService) {


  }


}
