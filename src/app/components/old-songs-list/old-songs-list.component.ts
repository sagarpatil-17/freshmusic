import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-old-songs-list',
  templateUrl: './old-songs-list.component.html',
  styleUrls: ['./old-songs-list.component.css']
})
export class OldSongsListComponent implements OnInit {

  constructor(private music:MusicService, private router:Router) { }

  ngOnInit(): void {
    this.oldSongsList()
  }
  oldsongs:any;
  oldSongsList(){
  this.music.getData().subscribe(
    (osl)=>(this.oldsongs= osl)
  )
  }
  

}
