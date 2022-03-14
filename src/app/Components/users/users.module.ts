import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component'


@NgModule({
  declarations: [
    UserListComponent,
    LoginComponent,
    LogoutComponent,
    UnauthorizedComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ],
  exports:[
    LoginComponent
  ]
})
export class UsersModule { }
