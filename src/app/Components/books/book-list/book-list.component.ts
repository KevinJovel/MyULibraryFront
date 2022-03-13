import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { IBook } from 'src/app/models/IBook';
import { BooksService } from 'src/app/Services/books.service';
import { IGenre } from '../../../models/IGenre';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [MessageService]
})
export class BookListComponent implements OnInit {
  products: IBook[]   =[];
  productsCache: IBook[]   =[];
  GenresList: IGenre[]   =[];
  displayPosition: boolean = false;
  position: string ='top';
  searchTerm:string ='';

  BooksForm: FormGroup;
  constructor(private bookService:BooksService, private fb:FormBuilder, private messageService: MessageService) {
   this.BooksForm = this.fb.group({
      bookID:[0],        
      title:['', Validators.required],        
      author:['', Validators.required],       
      publishedYear:['', Validators.required],
      stock:['', Validators.required],        
      genreId:['', Validators.required],      
    })
   }

  ngOnInit(): void {
    this.getBooks();
    this.bookService.getGenres().subscribe(res=>{
      this.GenresList = res;
    })
  
  }
  getBooks(){
    this.bookService.getBooks().subscribe(res=>{
      this.products = res;
      this.productsCache = res;
    });
  }
  showPositionDialog() {
    this.displayPosition = true;
  }
  close(){
    alert('Entra')
    this.displayPosition = false;
  }
  search(){
    this.products = this.productsCache.filter(x=>(x.author?.toUpperCase().includes(this.searchTerm.toUpperCase())) || (x.title?.toUpperCase().includes(this.searchTerm.toUpperCase())));
  }
  saveBook(){
    this.bookService.setBook(this.BooksForm.value).subscribe(res=>{
      this.showSuccess();
      this.displayPosition = false;
      this.getBooks();
    //  this.BooksForm.reset();
    })
  }
  showSuccess() {
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Book saved successfuly'});
    }
}
