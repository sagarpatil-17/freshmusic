import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-bollywood-songs-list',
  templateUrl: './bollywood-songs-list.component.html',
  styleUrls: ['./bollywood-songs-list.component.css']
})
export class BollywoodSongsListComponent implements OnInit {

  constructor(private act:ActivatedRoute, private music:MusicService, private router:Router) { }

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

  onRou(i:any){
    this.router.navigate(['bollywood-songs-play',i])
  }

  onRou2(i:any){
    this.router.navigate(['bollywood-songs-play2',i])
  }

  onRou3(i:any){
    this.router.navigate(['bollywood-songs-play3',i])
  }

}
