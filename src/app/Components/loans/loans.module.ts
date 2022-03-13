import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { LoanListComponent } from './loan-list/loan-list.component';


@NgModule({
  declarations: [
    LoanListComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule
  ]
})
export class LoansModule { }
