import { Component, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AddUserComponent {
  addUserForm!: FormGroup
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.addUserForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      userType: ['0', [Validators.required, this.InvalidUserType]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(){
    if (this.addUserForm.invalid) {
      this.markAllFieldsAsTouched(this.addUserForm);
      return
    }
    console.log(this.addUserForm.value);
  }
  get f(){
    return this.addUserForm.controls;
  }

  markAllFieldsAsTouched(formGroup: FormGroup | FormArray): void {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup || control instanceof FormArray) {
        this.markAllFieldsAsTouched(control);
      } else {
        control.markAsTouched();
        control.updateValueAndValidity();
      }
    });
  }
  InvalidUserType(control: AbstractControl): ValidationErrors | null {
  return control.value === '0' ? { invalidSelect: true } : null;
}
}
