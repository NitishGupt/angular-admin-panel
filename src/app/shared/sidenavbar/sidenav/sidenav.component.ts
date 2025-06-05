import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { User } from '../../model/user';
import { UserserviceService } from '../../services/services/userservice.service';


@Component({
  selector: 'app-sidenav',
  imports: [RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  currentUser: string = '';
  currentUserEmail: string = '';
  isLoggedIn: boolean = false;
  
  constructor(private authService: UserserviceService, private router:Router) { }
  ngOnInit() {
    this.authService.currentUser.subscribe((user: User | null) => {
      if (user) {
        this.isLoggedIn = true;
        this.currentUser = user.firstName;
        this.currentUserEmail = user.email;
      }
    })
  }


  logout() {
    this.authService.logout();
    this.currentUser = '';
    this.currentUserEmail = '';
    this.router.navigate(['/login']);
  }

}
