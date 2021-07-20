import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { ListaComponent } from './lista/lista.component';
import { SaveComponent } from './save/save.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ConfirmAlertComponent } from '../../shared/confirm-alert/confirm-alert.component';


@NgModule({
  declarations: [
    CursosComponent,
    ListaComponent,
    SaveComponent,
    DetallesComponent,
    ConfirmAlertComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class CursosModule { }
