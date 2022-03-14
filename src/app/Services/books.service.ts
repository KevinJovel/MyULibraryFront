import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IBook } from '../models/IBook';
import { environment } from 'src/environments/environment';
import { IGenre } from '../models/IGenre';
import { ILoan } from '../models/ILoan';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {

  }
  //Get Books
  getBooks() {
    return this.http.get<IBook[]>(`${environment.urlService}/api/Books`);
  }
  getBookById(Id: number) {
    return this.http.get<IBook>(`${environment.urlService}/api/Books/${Id}`);
  }
  setBook(book: IBook){
    return this.http.post<IBook>(`${environment.urlService}/api/Books`,book);
  }
  //get Genres
  getGenres() {
    return this.http.get<IGenre[]>(`${environment.urlService}/api/Genres`);
  }
  //Loans
  createNewLoan(loan: ILoan){
    return this.http.post<ILoan>(`${environment.urlService}/api/Loans`,loan);
  }
  getLoans() {
    return this.http.get<ILoan[]>(`${environment.urlService}/api/Loans`);
  }
  returnLoan(loan: ILoan){
    return this.http.put<ILoan>(`${environment.urlService}/api/Loans`,loan);
  }
}
