import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../../shared/model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private _httpClient: HttpClient) { }

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser = this.currentUserSubject.asObservable();

  login(user: User) {
    this.currentUserSubject.next(user);
  }
  logout() {
    this.currentUserSubject.next(null);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  registerUser(user: User): Observable<boolean> {
    return this._httpClient.post<boolean>('https://your-api-endpoint.com/users', user);
  }
}
