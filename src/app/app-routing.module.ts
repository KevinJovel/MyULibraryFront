import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "Book",
    loadChildren: () =>
      import("./Components/books/books.module").then((m) => m.BooksModule),
  },
  {
    path: "User",
    loadChildren: () =>
      import("./Components/users/users.module").then((m) => m.UsersModule),
  },
  {
    path: "Loan",
    loadChildren: () =>
      import("./Components/loans/loans.module").then((m) => m.LoansModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
