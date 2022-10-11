import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.css']
})
export class SubNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  tr = localStorage.getItem('isLoggedIn')
  tr2 :any
  tr3 = localStorage.getItem('isLoggedIn1')
  

  gp() {
    if (this.tr == 'false') {
      alert('Get Premium First')
      window.location.href = './premium'
      
    }else if(this.tr3==this.tr){
      this.tr2 = localStorage.setItem('isLoggedIn1','false')
      alert('Get Premium First')
      window.location.href = './premium'
    }
  }

}
