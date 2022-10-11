import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-new-releases-list',
  templateUrl: './new-releases-list.component.html',
  styleUrls: ['./new-releases-list.component.css']
})
export class NewReleasesListComponent implements OnInit {

  constructor(private music:MusicService, private router:Router) { }

  ngOnInit(): void {
    this.newReleasesList()
  }

  newRel:any;
  newReleasesList(){
  this.music.getData().subscribe(
    (nrl)=>(this.newRel= nrl)
  )
  }

}
