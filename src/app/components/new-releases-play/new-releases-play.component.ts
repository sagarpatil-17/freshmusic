import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-new-releases-play',
  templateUrl: './new-releases-play.component.html',
  styleUrls: ['./new-releases-play.component.css']
})
export class NewReleasesPlayComponent implements OnInit {

  constructor(private act:ActivatedRoute, private music:MusicService) { }

  ngOnInit(): void {
    this.newReleasesList()
    this.newReleasesPlay()
  }

  newRel:any;
  newReleasesList(){
  this.music.getData().subscribe(
    (nrl)=>(this.newRel= nrl)
  )
  }

  newPlay:any;
  newReleasesPlay(){
    this.act.params.subscribe(
      (nrp) => { this.newPlay = nrp['id']}
    )
  }

}
