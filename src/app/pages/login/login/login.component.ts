import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserserviceService } from '../../../shared/services/services/userservice.service';
import { User } from '../../../shared/model/user';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent {

  registrationForm!: FormGroup;
  loginform!: FormGroup;
  constructor(private fb: FormBuilder,
     private _authservice: UserserviceService,
    private router:Router) { }

  ngOnInit() {

    this.loginform = this.fb.group({
      logEmail: ['guest', [Validators.required, Validators.email]],
      logPassword: ['123456', [Validators.required, Validators.minLength(6)]],
    });

    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmitlog() {
    console.log('Guest LoggedIn');
  }
  onSubmit() {
    alert('Register Now is clicked')
    if (this.registrationForm.invalid) {
      return;
    }
    console.log(this.registrationForm.value);
  }

  guestLogin() {
    const guestUser: User = {
      id: 1,
      firstName: 'Guest-User',
      email: 'guest@example.com',
      lastName: 'Guest',
      password: '123456',
      role: 'Guest'
    };
    this._authservice.login(guestUser);
     this.router.navigate(['/dashboard']);
  }
}



