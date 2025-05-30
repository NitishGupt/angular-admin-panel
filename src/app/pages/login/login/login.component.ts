import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  user: User = new User('', '', '');
  constructor(private router:Router) { }
  onSubmit(form: any) {
    debugger;
    const role = form.value.userRole === '1' ? 'admin' : 'user';
    const email = form.value.userEmail;
    const password = form.value.userPassword;
    const userList = JSON.parse(localStorage.getItem('userList') || '[]');
    const loggedInUser = userList.find(
      (user: User) =>
        user.userRole === role &&
        user.userEmail === email &&
        user.userPassword === password
    );

    if (loggedInUser) {

      localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
      this.router.navigate(['/dashboard']); 
    } else {
      alert('Invalid credentials');
    }
  }
}
class User {
  constructor(
    public userRole: string,
    public userEmail: string,
    public userPassword: string
  ) {}
}

