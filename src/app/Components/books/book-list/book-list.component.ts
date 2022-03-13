import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/IBook';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  products: IBook[]   =[];
  displayPosition: boolean = false;
  position: string ='top';
  constructor(private bookService:BooksService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(res=>{
      console.log(res);
      this.products = res;
    })
  }
  showPositionDialog() {
    this.displayPosition = true;
}
close(){
  alert('Entra')
  this.displayPosition = false;
}

}
