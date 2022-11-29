import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseApi = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {}

  getUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseApi + '/baby-consult/user');
  }
}