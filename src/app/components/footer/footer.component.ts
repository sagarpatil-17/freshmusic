import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private music:MusicService) { }

  ngOnInit(): void {
    this.footerLinks()
  }
  footer:any;
  footerLinks(){
  this.music.getData().subscribe(
    (fl)=>(this.footer= fl)
  )
  }

}
