import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'user-list',
        component: UserListComponent,
        data: {
          title: 'User List',
          // urls: [
          //   { title: 'Dashboard', url: '/dashboard' },
          //   { title: 'Historial de Salarios' }
          // ]
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
