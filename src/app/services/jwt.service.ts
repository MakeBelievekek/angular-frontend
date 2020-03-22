import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ResultModel } from '../models/result.model';

const LOGIN_URL = 'https://formulative.io/api/oauth/token';
const CLIENT_ID = '39a29aab6cd04415c33ef205c1dda77c';
const CLIENT_SECRET = 'a7833be6793938b6201168535fa8e5c4e8681cf55bcfc094a384ad07f93cb456';
const CLIENT_CREDITANTIALS = 'client_credentials';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json; charset=utf-8'
  }),
};

@Injectable({
  providedIn: 'root',
})
export class JwtService {

  data: any;

  constructor(private httpClient: HttpClient) {
    this.data = {
      'grant_type': 'client_credentials',
      'client_id': '39a29aab6cd04415c33ef205c1dda77c',
      'client_secret': 'a7833be6793938b6201168535fa8e5c4e8681cf55bcfc094a384ad07f93cb456',
    };
  }


  parasztLogin(): any {
    console.log('hello');
    return this.httpClient.post(LOGIN_URL, this.data, httpOptions);
  }


  login() {
    return this.httpClient.post<{ access_token: string }>(LOGIN_URL, {CLIENT_CREDITANTIALS, CLIENT_ID, CLIENT_SECRET}).pipe(tap(res => {
      localStorage.setItem('access_token', res.access_token);
    }));
  }
}
