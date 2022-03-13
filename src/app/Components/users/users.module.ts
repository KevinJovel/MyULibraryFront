import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ]
})
export class UsersModule { }
