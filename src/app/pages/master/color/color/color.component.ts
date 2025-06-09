import { Component, ViewEncapsulation } from '@angular/core';
import { ReuseTableComponent } from '../../../../shared/reuse-table/reuse-table/reuse-table.component';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color',
  imports: [ReuseTableComponent,ReactiveFormsModule],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css',
  encapsulation:ViewEncapsulation.None
})
export class ColorComponent {
columnDefs: any[] = [];
  logoData: any[] = [];
  colorForm!:FormGroup
constructor(private fb:FormBuilder) { }

  ngOnInit() {

this.colorForm= this.fb.group({
  name:['',[Validators.required]],
  code:['',[Validators.required,Validators.maxLength(7)]],
  createdDate:new Date()
})

    this.columnDefs = ['Name','Code','CreatedDate', 'Action'];
    this.logoData = [
      {
        Name: 'Blue', Code:'#0000FF', CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i> <i class="fa-regular fa-square-minus ms-1"></i>'
      },
      {
        Name: 'Purple', Code:'#800080', CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i>  <i class="fa-regular fa-square-minus ms-1"></i>'
      },
      {
        Name: 'Orange', Code:'#ffa500', CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i>  <i class="fa-regular fa-square-minus ms-1"></i>'
      }
    ];
  }
  handleRowClick(row: any) {
    console.log('Row clicked:', row);
  }

 
  onSubmit() {
    if (this.colorForm.invalid) {
      this.markAllFieldsAsTouched(this.colorForm);
      return;
    }
    console.log(this.colorForm.value); 
    this.logoData.push(this.colorForm.value);
    this.colorForm.reset(); 
  }
  get f() {
   return  this.colorForm.controls
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
}
