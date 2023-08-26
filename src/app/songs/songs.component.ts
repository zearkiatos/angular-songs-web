import { Component, OnInit } from '@angular/core';
import { Song } from './song';
import { SongsService } from './songs.service';
import { AuthService } from '../auth/auth.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs: Song[];

  constructor(private songsService: SongsService, private authService: AuthService) { }

  getSongs() {
    this.authService.logIn(environment.songsApiUsername, environment.songsApiPassword).subscribe(response => {
      this.songsService.getSongs(response.accessToken).subscribe(songs => this.songs = songs);
    });
  }

  ngOnInit() {
    this.getSongs();
  }

}
