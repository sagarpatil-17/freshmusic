import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-old-songs-play',
  templateUrl: './old-songs-play.component.html',
  styleUrls: ['./old-songs-play.component.css']
})
export class OldSongsPlayComponent implements OnInit {

  constructor(private act:ActivatedRoute, private music:MusicService) { }

  ngOnInit(): void {
    this.oldSongsList()
    this.oldSongsPlay()
  }
  oldsongs:any;
  oldSongsList(){
  this.music.getData().subscribe(
    (osl)=>(this.oldsongs= osl)
  )
  }

  oldPlay:any;
  oldSongsPlay(){
    this.act.params.subscribe(
      (osp) => { this.oldPlay = osp['id']}
    )
  }
}
