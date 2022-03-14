import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  user:string = '';
  pass:string = '';
  constructor(private userService: UsersService, private messageService: MessageService) { 

  }

  ngOnInit(): void {
  }
  logIn(){
    this.userService.logIn(this.user, this.pass).subscribe(res=>{
      console.log(res);
      if(res!=null){
        sessionStorage.setItem("user",res.userName);
        sessionStorage.setItem("idUser",res.userId.toString());
        sessionStorage.setItem("role",res.roleId.toString());
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Log In Successfully.'});
        window.location.href = "/Book/book-list";
      }else{ 
          this.messageService.add({severity:'error', summary: 'Error', detail: 'User or password incrorrect.'});

      }
    })
  }

}
