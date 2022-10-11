import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signoutBtn() {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem('email')
    localStorage.removeItem('name')
    localStorage.removeItem('password')
  }

  name=localStorage.getItem('name');
  email=localStorage.getItem('email')
  
}
