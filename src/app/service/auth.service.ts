import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { RequestLogin, ResponseLogin } from '../interfaces/auth.interface';
import { ResponseBase } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseApi = 'http://localhost:8080';

  public isAdmin = new BehaviorSubject<boolean>(false);
  public isUser = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {
    this.isLogin();
  }

  login(payload: RequestLogin): Observable<ResponseBase<ResponseLogin>>{
    return this.httpClient
    .post<ResponseBase<ResponseLogin>>(this.baseApi + '/login', payload)
    .pipe(
      tap((val) => {
        console.log(val);
        if (val.data.jwtrole == 'admin') {
          this.isAdmin.next(true);
        } else if (val.data.jwtrole === 'user') {
          this.isUser.next(true);
        }
      })
    );
  }

  isLogin() {
    const token = localStorage.getItem('token')
    if (token){
      this.isAdmin.next(true)
    }
  }

  register(payload: { 
    username: string
    email: string
    noTelp: string
    password: string
    role: string
  }) {
    return this.httpClient.post(this.baseApi + '/register', payload);
  }
}
