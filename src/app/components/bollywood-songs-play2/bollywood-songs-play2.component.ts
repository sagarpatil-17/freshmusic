import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-bollywood-songs-play2',
  templateUrl: './bollywood-songs-play2.component.html',
  styleUrls: ['./bollywood-songs-play2.component.css']
})
export class BollywoodSongsPlay2Component implements OnInit {

  constructor(private act:ActivatedRoute, private music:MusicService) { }

  ngOnInit(): void {
    this.bollywoodSongs()
    this.bollywoodSongsList()
  }
  bolly:any;
  bollywoodSongs(){
  this.music.getData().subscribe(
    (bs)=>(this.bolly= bs)
  )
  }

  bollySongs:any;
  bollywoodSongsList(){
    this.act.params.subscribe(
      (bsl) => { this.bollySongs = bsl['id']}
    )
  }

}
