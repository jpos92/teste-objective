import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    NotAuthorizedComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ErrorPagesRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ErrorPagesModule { }
