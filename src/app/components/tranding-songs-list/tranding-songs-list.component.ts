import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-tranding-songs-list',
  templateUrl: './tranding-songs-list.component.html',
  styleUrls: ['./tranding-songs-list.component.css']
})
export class TrandingSongsListComponent implements OnInit {

  constructor(private music:MusicService, private router:Router) { }

  ngOnInit(): void {
    this.trandingSongsList()
  }

  trandList:any;
  trandingSongsList(){
  this.music.getData().subscribe(
    (ts)=>(this.trandList= ts)
  )
  }
  

}
