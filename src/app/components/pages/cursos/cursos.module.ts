import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { ListaComponent } from './lista/lista.component';
import { SaveComponent } from './save/save.component';
import { DetallesComponent } from './detalles/detalles.component';
import { VolverComponent } from 'src/app/components/shared/volver/volver.component';


@NgModule({
  declarations: [
    CursosComponent,
    ListaComponent,
    SaveComponent,
    DetallesComponent,
    VolverComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule
  ]
})
export class CursosModule { }