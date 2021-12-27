import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule),
  },
  {
    path: 'personagens',
    loadChildren: () => import('./personagens/personagens.module')
      .then(m => m.PersonagensModule)
  },
  {
    path: 'error-pages',
    loadChildren: () => import('./error-pages/error-pages.module')
      .then(m => m.ErrorPagesModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
  ,
  {
    path: '**',
    redirectTo: 'error-pages/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
