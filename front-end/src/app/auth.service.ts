import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  htpp: any;

  constructor(
    httpClient: HttpClient
  ) { }

  registerUser(user: any) {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.htpp.post('http://localhost:3000/account/reg', user,
    { headers: headers }).pipe(map((res: any) => res.json()))
  }
}
