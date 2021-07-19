import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/cursos',
    pathMatch:'full'
  },
  {
    path: 'cursos',
    loadChildren: () => import('./components/pages/cursos/cursos.module').then(m => m.CursosModule)
  },
  { path: 'about',
    loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule)
  },
  { path: 'contactenos', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule) },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
