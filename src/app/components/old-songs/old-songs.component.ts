import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-old-songs',
  templateUrl: './old-songs.component.html',
  styleUrls: ['./old-songs.component.css']
})
export class OldSongsComponent implements OnInit {

  constructor(private music:MusicService, private router:Router) { }

  ngOnInit(): void {
    this.oldSongs()
  }

  oldsong:any;
  oldSongs(){
  this.music.getData().subscribe(
    (os)=>(this.oldsong= os)
  )
  }

  onRou(i:any){
    this.router.navigate(['old-songs-play',i])
  }

}
