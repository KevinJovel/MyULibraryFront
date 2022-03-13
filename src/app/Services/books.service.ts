import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IBook } from '../models/IBook';
import { environment } from 'src/environments/environment';
import { IGenre } from '../models/IGenre';

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
    return this.http.get<IBook[]>(`${environment.urlService}/api/Books/${Id}`);
  }
  setBook(book: IBook){
    return this.http.post<IBook>(`${environment.urlService}/api/Books`,book);
  }
  //get Genres
  getGenres() {
    return this.http.get<IGenre[]>(`${environment.urlService}/api/Genres`);
  }
  //
}
