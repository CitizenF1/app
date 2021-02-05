import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http: any;

  constructor(
    httpClient: HttpClient
  ) { }

  registerUser(user: any) {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/account/reg', user,
    { headers: headers }).pipe(map((res: any) => res.json()))
  }

  authUser(user: any) {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/account/auth', user,
    { headers: headers }).pipe(map((res: any) => res.json()))

  }
}
