import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from './song';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  constructor(private http: HttpClient) {}

  public getSongs(accessToken: string): Observable<Song[]> {
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    return this.http.get<Song[]>(
      `${environment.songsApiBaseUrl}/songs`,
      options
    );
  }
}
