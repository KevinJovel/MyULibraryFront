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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
