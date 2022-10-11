import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-tranding-songs',
  templateUrl: './tranding-songs.component.html',
  styleUrls: ['./tranding-songs.component.css']
})
export class TrandingSongsComponent implements OnInit {

  constructor(private music: MusicService, private router: Router) { }

  ngOnInit(): void {
    this.trandingSongs()
  }

  trand: any;
  trandingSongs() {
    this.music.getData().subscribe(
      (bs) => (this.trand = bs)
    )
  }

  onRou(i: any) {
    this.router.navigate(['tranding-songs-play', i])
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
