import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  music = "https://raw.githubusercontent.com/sagarpatil-17/music-app/main/musicapi.json";

  getData() {
    return this.http.get(this.music)
  }

  premium = "https://raw.githubusercontent.com/sagarpatil-17/music-app/main/apidata2.json";

  getPremium() {
    return this.http.get(this.premium)
  }

}
