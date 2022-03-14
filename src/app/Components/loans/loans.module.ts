import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { LoanListComponent } from './loan-list/loan-list.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoanListComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ]
})
export class LoansModule { }
