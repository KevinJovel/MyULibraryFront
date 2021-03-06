import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ]
})
export class BooksModule { }
