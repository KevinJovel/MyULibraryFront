import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/IBook';
import { BooksService } from '../../Services/books.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items:any[]  =[]
  products: IBook[]   =[];
  constructor(private bookService:BooksService) { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Books',
          icon: 'pi pi-fw pi-book',
          items: [
            // {
            //       label: 'Avaliable Books', 
            //       icon: 'pi pi-fw pi-plus',
            //       items: [
            //           {label: 'Project'},
            //           {label: 'Other'},
            //       ]
            //   },
              {label: 'Avaliable Books'},
              {label: 'My Loans'}
          ]
      }, {
        label: 'Loans',
        icon: 'pi pi-fw pi-list',
        items: [
            {label: 'Loans List'},
            // {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
      },
      {
          label: 'Users',
          icon: 'pi pi-fw pi-users',
          items: [
              {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
              // {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];
  this.bookService.getBooks().subscribe(res=>{
    console.log(res);
    this.products = res;
  })
  }


}
