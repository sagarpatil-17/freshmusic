import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {

  gopremium: any = FormGroup;

  constructor(private gp: FormBuilder, private premium:MusicService) { }

  ngOnInit(): void {
    this.getPre()

    this.gopremium = this.gp.group({
      flexRadioDefault : ['', Validators.required]
    })
  }
  

  pre:any;
  getPre(){
    this.premium.getPremium().subscribe(
      (gp) => (this.pre = gp)
    )
  }

}
