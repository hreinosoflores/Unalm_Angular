import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { ListaComponent } from './lista/lista.component';
import { SaveComponent } from './save/save.component';

const routes: Routes = [
  {
    path: '',
    component: ListaComponent
  },
  {
    path: 'detail',
    component: DetallesComponent
  },
  {
    path: 'save',
    component: SaveComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
