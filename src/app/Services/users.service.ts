import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IRole } from '../models/IRole';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
   //Get Books
   getUsers() {
    return this.http.get<IUser[]>(`${environment.urlService}/api/Users`);
  }
   getUserById(Id: number) {
    return this.http.get<IUser>(`${environment.urlService}/api/Users/${Id}`);
  }
  setUser(user: IUser){
    return this.http.post<IUser>(`${environment.urlService}/api/Users`, user);
  }
   //Get Books
   getRoles() {
    return this.http.get<IRole[]>(`${environment.urlService}/api/Roles`);
  }
  logIn(user:string, pass:string){
    return this.http.get<IUser>(`${environment.urlService}/api/Users/login/${user}/${pass}`);
  }
}
