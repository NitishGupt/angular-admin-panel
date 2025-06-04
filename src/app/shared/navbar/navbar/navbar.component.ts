import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { UserserviceService } from '../../services/services/userservice.service';
import { User } from '../../../shared/model/user';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentUserName: string = ''
  isLoggedIn: boolean = false;
  constructor(private _authService: UserserviceService) { }
  ngOnInit(): void {
    this._authService.currentUser.subscribe((user: User | null) => {
       if (user) {
        this.isLoggedIn = true;
        this.currentUserName = user.firstName;
      } else {
        this.currentUserName = '';
      }
    });
  }
}



