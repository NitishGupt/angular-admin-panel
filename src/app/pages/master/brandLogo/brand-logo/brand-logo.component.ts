import { Component, ViewEncapsulation } from '@angular/core';
import { ReuseTableComponent } from '../../../../shared/reuse-table/reuse-table/reuse-table.component';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-brand-logo',
  imports: [ReuseTableComponent, ReactiveFormsModule],
  templateUrl: './brand-logo.component.html',
  styleUrl: './brand-logo.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BrandLogoComponent {
  columnDefs: any[] = [];
  logoData: any[] = [];
  brandForm!: FormGroup
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.brandForm = this.fb.group({
      name: ['', [Validators.required]],
      brandImage: ['', [Validators.required]]
    })

    this.columnDefs = ['Name', 'Image', 'CreatedDate', 'Action'];
    this.logoData = [
      {
        Name: 1001, Image: {
          src: 'https://placehold.co/50x50',
          alt: 'User',
          label: 'Logo 1001'
        },
        CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i> <i class="fa-regular fa-square-minus"></i>'
      },
      {
        Name: 1002, Image: {
          src: 'https://placehold.co/50x50',
          alt: 'User',
          label: 'Logo 1001'
        }, CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i>  <i class="fa-regular fa-square-minus"></i>'
      }
    ];
  }

  onSubmit() {
    if (this.brandForm.invalid) {
      this.markAllFieldsAsTouched(this.brandForm);
      return
    }
    console.log(this.brandForm.value);
    this.brandForm.reset();
  }
  handleRowClick(row: any) {
    console.log('Row clicked:', row);
  }
  get f() {
    return this.brandForm.controls;
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
}
