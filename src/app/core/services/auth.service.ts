import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/internal/operators';
import * as socketIO from 'socket.io-client';
import { CONFIG } from "../config";
import { UserDetails } from '../interfaces/IUserDetails';
import { TokenResponse } from '../interfaces/ITokenResponse';
import { TokenPayload } from '../interfaces/ITokenPayload';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;
  private socket = null;
  private token: string;


  constructor(private http: HttpClient, private router: Router) {
    this.initSocket();
  }



  getSocket(): any {
    if (this.socket === null) {
      this.initSocket();
    }
    return this.socket;
  }


  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }


  getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }


  isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }


  login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }


  loginSteam(): void {
    window.location.href = `${CONFIG.API_HOST}${CONFIG.API_PATH}${CONFIG.API_VERSION}/users/steam`;
  }


  logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.initSocket();
    this.router.navigateByUrl('/');
  }


  register(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }


  saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }


  private initSocket(): void {
    if (this.socket !== null) {
      console.log('Disconnecting socket');
      this.socket.disconnect();
    }
    let query = '';
    if (this.isLoggedIn()) {
      query = `?token=${this.getToken()}`;
    }
    this.socket = socketIO(`${CONFIG.API_HOST}${query}`);
  }


  private request(method: 'post'|'get', type: 'login'|'register'|'profile'|'steam', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(
        `${CONFIG.API_HOST}${CONFIG.API_PATH}${CONFIG.API_VERSION}/users/${type}`,
        user
      );
    } else {
      const options = {
        headers: {}
      };
      base = this.http.get(
        `${CONFIG.API_HOST}${CONFIG.API_PATH}${CONFIG.API_VERSION}/users/${type}`,
        options
      );
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        this.initSocket();
        return data;
      })
    );

    return request;
  }
}
