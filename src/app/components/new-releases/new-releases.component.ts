import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {

  constructor(private music:MusicService, private router:Router) { }

  ngOnInit(): void {
    this.newReleases()
  }


  newRels:any;
  newReleases(){
  this.music.getData().subscribe(
    (bs)=>(this.newRels= bs)
  )
  }

  onRou(i:any){
    this.router.navigate(['new-releases-play',i])
  }

}
