import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IBook } from '../models/IBook';
import { environment } from 'src/environments/environment';

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
}
