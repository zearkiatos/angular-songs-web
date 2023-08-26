import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from './AuthResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }

public logIn(username: string, password: string):Observable<AuthResponse> {
  return this.http.post<AuthResponse>(`${environment.songsApiBaseUrl}/login`, {
    username,
    password
  })
}

}
