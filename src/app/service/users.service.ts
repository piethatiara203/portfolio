import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { ResponseBase } from '../interfaces/response.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseApi = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  err: any;

  listUsers(): Observable<User[]> {
    return this.httpClient
      .get<ResponseBase<User[]>>(`${this.baseApi}/baby-consult/user`)
      .pipe(
        map((val) => {
          const data: User[] = [];
          // mapping data for new response
          for (let item of val.data) {
            data.push({
              id: item.id,
              username: item.username,
              email: item.email,
              noTelp: item.noTelp,
              password: item.password,
              role: item.role,
              image: `${this.baseApi}/baby-consult/files/${item.image}:.+`,
            });
          }
          return data;
        }),
        catchError((error) => {
          console.log(error);
          throw error;
        })
      );

    // const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer ${token}`,
    // });
    // return this.httpClient
    // .get<User[]>(`${this.baseApi}/baby-consult/user`, { headers: headers })
    // .pipe(
    //   catchError((error) => {
    //     console.log(error);
    //     throw error;
    //   })
    // );
  }

  uploadImage(data: File): Observable<ResponseBase<String>> {
    // const token = localStorage.getItem('token')
    // const header = new HttpHeaders({
    //   Authorization: `Bearer ${token}`,
    // });
    const file = new FormData();
    file.append('file', data, data.name);
    return this.httpClient.post<ResponseBase<String>>(
      `${this.baseApi}/baby-consult/uploads`, 
      file
    );
  }

  addUser(payload: any) {
    return this.httpClient.post<ResponseBase<any>>(
      `${this.baseApi}/register`,
      payload
    );
  }
}
