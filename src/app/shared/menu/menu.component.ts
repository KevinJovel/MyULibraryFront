import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items:any[]  =[]
  constructor() { }
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
              {label: 'Book List', 
               routerLink: 'Book/book-list'},
              {label: 'My Loans'}
          ]
      },
      {
          label: 'Users',
          icon: 'pi pi-fw pi-users',
          items: [
              {label: 'Add User', icon: 'pi pi-fw pi-user-plus',
              routerLink: 'User/user-list'},
              // {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];
  }


}
