import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tr = localStorage.getItem('isLoggedIn')

  gp() {
    if (this.tr == 'false') {
      alert('Get Premium First')
      window.location.href = './premium'
    }
  }
  

}
