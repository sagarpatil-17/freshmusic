import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-bollywood-songs',
  templateUrl: './bollywood-songs.component.html',
  styleUrls: ['./bollywood-songs.component.css']
})
export class BollywoodSongsComponent implements OnInit {

  constructor(private music:MusicService, private router:Router) { }

  ngOnInit(): void {
    this.bollywoodSongs()
  }

  bolly:any;
  bollywoodSongs(){
  this.music.getData().subscribe(
    (bs)=>(this.bolly= bs)
  )
  }

  onRou(i:any){
    this.router.navigate(['/bollywood-songs',i])
  }


}
