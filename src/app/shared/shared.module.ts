import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InputTextComponent } from './components/inputs/input-text/input-text.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InputTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbPaginationModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    InputTextComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbPaginationModule
  ]
})
export class SharedModule { }
