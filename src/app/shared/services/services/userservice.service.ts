import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../../shared/model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }
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

  // getUserList() {
  //   return this._httpClient.get<User[]>('http://localhost:3000/api/users');
  // }
  // getUserById(id: string) {
  //    return this._httpClient.get<User>(`http://localhost:3000/api/users/${id}`);
  // }
}
