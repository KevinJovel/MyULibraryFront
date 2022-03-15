import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { IUser } from 'src/app/models/IUser';
import { BooksService } from 'src/app/Services/books.service';
import { UsersService } from '../../../Services/users.service';
import { IRole } from '../../../models/IRole';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [MessageService]
})
export class UserListComponent implements OnInit {
  Users: IUser[]   =[];
  UsersCache: IUser[]   =[];
  RolesList: IRole[]   =[];
  displayPosition: boolean = false;
  position: string ='top';
  searchTerm:string ='';

  UsersForm: FormGroup;
  passconfirm:string='';
  constructor(private userService:UsersService, private fb:FormBuilder, private messageService: MessageService) {
    this.UsersForm = this.fb.group({
      userId:[0],    
      firstName:['', Validators.required], 
      lastName:['',Validators.required],  
      email:['',Validators.required],     
      userName:['', Validators.required],  
      password:['', Validators.required],  
      roleId:[1, Validators.required],    
    })
   }

  ngOnInit(): void {
    this.getUsers();
    this.userService.getRoles().subscribe(res=>{
      console.log(res);
      this.RolesList =res;
    })
  }
  getUsers(){
    this.userService.getUsers().subscribe(res=>{
      console.log(res);
      this.Users=res;
      this.UsersCache=res;
    })
  }
  saveUser(){
    this.userService.setUser(this.UsersForm.value).subscribe(res=>{
      this.showSuccess();
      this.displayPosition = false;
      this.getUsers();
    //  this.BooksForm.reset();
    })
  }
  showPositionDialog() {
    this.displayPosition = true;
  }
  close(){
    this.displayPosition = false;
  }
  search(){
    this.Users = this.UsersCache.filter(x=>(x.firstName.toUpperCase().includes(this.searchTerm.toUpperCase())) || (x.lastName.toUpperCase().includes(this.searchTerm.toUpperCase())))
  }
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'User saved successfully'});
 }
 value(val : string){
   this.passconfirm = val;
 }
}
