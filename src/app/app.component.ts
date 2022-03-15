import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  login:boolean=true;
  registro:boolean=false;
  title = 'My ULibrary System';
  constructor(private router: Router){

  }
  ngOnInit(): void {
    let currentUser=sessionStorage.getItem("user");
    if(currentUser){
      this.login= false;
    }else{
      this.login= true;
      this.router.navigate(["./"]);
    }
    
  }
}
