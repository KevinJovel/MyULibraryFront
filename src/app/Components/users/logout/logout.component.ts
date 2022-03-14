import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("idUser");
    sessionStorage.removeItem("role");
    window.location.href = "/";
  }

}
