import { Component, ViewEncapsulation } from '@angular/core';
import { User } from '../../../../shared/model/user';
import { UserserviceService } from '../../../../shared/services/services/userservice.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent {
  constructor(private authService: UserserviceService) { }
  userfName: string = '';
  userLName: string = '';
  userEmail: string = '';
  userRole: string = '';

  ngOnInit() {
    this.authService.currentUser.subscribe((user: User | null) => {
      if (user) {
        this.userfName = user.firstName;
        this.userLName = user.lastName;
        this.userEmail = user.email;
        this.userRole = user.role;
      }

    });
  }

}
