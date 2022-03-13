import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'book-list',
        component: BookListComponent,
        data: {
          title: 'Book List',
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
export class BooksRoutingModule { }
