import { Component, ViewEncapsulation } from '@angular/core';
import { ReuseTableComponent } from '../../../../shared/reuse-table/reuse-table/reuse-table.component';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-size',
  imports: [ReuseTableComponent, ReactiveFormsModule],
  templateUrl: './size.component.html',
  styleUrl: './size.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SizeComponent {
  columnDefs: any[] = [];
  logoData: any[] = [];
  sizeForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {

    this.sizeForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      createdDate: new Date()
    })

    this.columnDefs = ['Name', 'CreatedDate', 'Action'];

    this.logoData = [
      {
        Name: 'XS', CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i> <i class="fa-regular fa-square-minus ms-1"></i>'
      },
      {
        Name: 'S', CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i>  <i class="fa-regular fa-square-minus ms-1"></i>'
      },
      {
        Name: 'M', CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i>  <i class="fa-regular fa-square-minus ms-1"></i>'
      },
      {
        Name: 'L', CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i>  <i class="fa-regular fa-square-minus ms-1"></i>'
      }
    ];
  }

  handleRowClick(row: any) {
    console.log('Row clicked:', row);
  }
  get f() {
    return this.sizeForm.controls;
  }
  onSubmit() {
    if (this.sizeForm.invalid) {
      this.markAllFieldsAsTouched(this.sizeForm);
      return;
    }

    console.log(this.sizeForm.value);
    this.sizeForm.reset();
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
