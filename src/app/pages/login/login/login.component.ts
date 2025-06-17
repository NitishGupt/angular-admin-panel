import { Component, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { UserserviceService } from '../../../shared/services/services/userservice.service';
import { User } from '../../../shared/model/user';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent {

  registrationForm!: FormGroup;
  loginform!: FormGroup;
  passwordMatch:boolean=true;
  isRegistered: boolean = false;
  constructor(private fb: FormBuilder,
    private _authservice: UserserviceService,
    private router: Router) { }

  ngOnInit() {

    this.loginform = this.fb.group({
      role:['',[Validators.required]],
      logEmail: ['guest', [Validators.required, Validators.email]],
      logPassword: ['123456', [Validators.required, Validators.minLength(6)]],
    });

    
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.registrationForm.controls;
  }

  get lf() {
    return this.loginform.controls;
  }

  onSubmitlog() {
    if (this.loginform.invalid) {
      this.markAllFieldsAsTouched(this.loginform);
      return;
    }
    console.log('Guest LoggedIn');
  }
  onSubmit() {
    console.log(this.registrationForm.value);

    if (this.registrationForm.invalid) {
      this.markAllFieldsAsTouched(this.registrationForm);
      return;
    }
    //checking for 'password' and 'confirmPassword' match
    if (this.registrationForm.value.password !== this.registrationForm.value.confirmPassword) {
      this.passwordMatch=false
      return;
    }
    //creating new user object and sending to service registration
    const user: User = {
      id: 'V001',
      firstName: this.registrationForm.value.firstName,
      lastName: this.registrationForm.value.lastName,
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
      role: this.registrationForm.value.role
    }
    //service registration
   this._authservice.registerUser(user).subscribe({
    next: (res) => {
      this.isRegistered = true; 
      this.registrationForm.reset();
    },
    error: (err) => {
      console.error('Registration failed', err);
      this.isRegistered = false;
    }
  });
    console.log(user);
  }

  private markAllFieldsAsTouched(formGroup: FormGroup | FormArray): void {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup || control instanceof FormArray) {
        this.markAllFieldsAsTouched(control);
      } else {
        control.markAsTouched();
        control.updateValueAndValidity();
      }
    });
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



