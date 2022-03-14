import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanListComponent } from './loan-list/loan-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'loan-list',
        component: LoanListComponent,
        data: {
          title: 'Loan List',
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
export class LoansRoutingModule { }
