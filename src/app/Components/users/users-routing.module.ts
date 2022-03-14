import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { LibraryGuardGuard } from 'src/app/Guards/library-guard.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'user-list',
        component: UserListComponent,
        data: {
          title: 'User List',
        },
        canActivate:  [LibraryGuardGuard],
      }, {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Log In',
        }
      }, {
        path: 'logout',
        component: LogoutComponent,
        data: {
          title: 'Log Out',
        },
        
      }, {
        path: 'unauthorized',
        component: UnauthorizedComponent,
        data: {
          title: 'Unauthorized',
        },
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
