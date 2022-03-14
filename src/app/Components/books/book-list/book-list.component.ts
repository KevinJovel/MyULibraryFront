import { formatDate } from '@angular/common';
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
  Books: IBook[]   =[];
  BookssCache: IBook[]   =[];
  GenresList: IGenre[]   =[];
  displayPosition: boolean = false;
  position: string ='top';
  searchTerm:string ='';
  disabled: boolean = false;

  BooksForm: FormGroup;
  LoanForm: FormGroup;
  processFlag:string ='new';

  value5:string ='';
  constructor(private bookService:BooksService, private fb:FormBuilder, private messageService: MessageService) {
    this.BooksForm= this.fb.group({});
    this.LoanForm= this.fb.group({});
    this.buildForm();
   }
   buildForm(){
    this.BooksForm = this.fb.group({
      bookID:[0],        
      title:['', Validators.required],        
      author:['', Validators.required],       
      publishedYear:['', Validators.required],
      stock:['', Validators.required],        
      genreId:[1, Validators.required],   
    });
    this.LoanForm = this.fb.group({
      bookId:[],
      userId:[1],     
      loanDate:[],  
      returnDate:[],
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
      this.Books = res;
      this.BookssCache = res;
    });
  }
  showPositionDialog() {
    this.processFlag='new';
    this.BooksForm.reset();
    this.buildForm();
    this.disabled=false;
    this.displayPosition = true;
  }
  close(){
    this.displayPosition = false;
  }
  search(){
    this.Books = this.BookssCache.filter(x=>(x.author?.toUpperCase().includes(this.searchTerm.toUpperCase())) || (x.title?.toUpperCase().includes(this.searchTerm.toUpperCase())||(x.genreName?.toUpperCase().includes(this.searchTerm.toUpperCase()))));
  }
  seeDetails(Id: number){
    this.disabled=true;
    this.bookService.getBookById(Id).subscribe(res=>{
      console.log(res);
      this.BooksForm.setValue(res);
      this.processFlag='details'
      this.displayPosition = true;
      this.BooksForm.controls['title'].disable();
      this.BooksForm.controls['author'].disable();
      this.BooksForm.controls['publishedYear'].disable();
    })
  }
  saveBook(){
    this.bookService.setBook(this.BooksForm.value).subscribe(res=>{
      this.showSuccess('Book saved successfully');
      this.displayPosition = false;
      this.getBooks();
    })
  }
  createLoan(){
    console.log(JSON.stringify(this.LoanForm.value));
    this.LoanForm.controls['bookId'].setValue(this.BooksForm.controls['bookID'].value);
    let dateTime = new Date()
    this.LoanForm.controls['loanDate'].setValue(dateTime);
    this.bookService.createNewLoan(this.LoanForm.value).subscribe(res=>{
      this.showSuccess('Loan created successfully.');
      this.displayPosition = false;
      this.getBooks();
    })
  }
  showSuccess(message:string) {
        this.messageService.add({severity:'success', summary: 'Success', detail: message});
  }
}
