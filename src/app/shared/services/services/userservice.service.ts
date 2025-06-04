import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../../shared/model/user';

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
}
