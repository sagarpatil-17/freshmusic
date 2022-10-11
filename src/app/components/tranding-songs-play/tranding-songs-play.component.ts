import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-tranding-songs-play',
  templateUrl: './tranding-songs-play.component.html',
  styleUrls: ['./tranding-songs-play.component.css']
})
export class TrandingSongsPlayComponent implements OnInit {

  constructor(private act:ActivatedRoute, private music:MusicService) { }

  ngOnInit(): void {
    this.trandingSongsList()
    this.trandingSongsPlay()
  }

  trandList:any;
  trandingSongsList(){
  this.music.getData().subscribe(
    (ts)=>(this.trandList= ts)
  )
  }

  trandPlay:any;
  trandingSongsPlay(){
    this.act.params.subscribe(
      (tsp) => { this.trandPlay = tsp['id']}
    )
  }


}
