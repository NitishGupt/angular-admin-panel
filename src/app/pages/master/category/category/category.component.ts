import { Component, ViewEncapsulation } from '@angular/core';
import { ReuseTableComponent } from '../../../../shared/reuse-table/reuse-table/reuse-table.component';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  imports: [ReuseTableComponent,ReactiveFormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent {
columnDefs: any[] = [];
  logoData: any[] = [];
  categoryForm!:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit() {

this.categoryForm=this.fb.group({
  name:['',[Validators.required]],
  title:['',[Validators.required]],
  discountValue:['',[Validators.required,Validators.min(0),Validators.max(100)]],
  link:['',[Validators.required]],
  image:[''],
  createdDate:new Date()
 });

    this.columnDefs = ['Name', 'Title', 'DiscountValue', 'Link','Image','CreatedDate','Action'];

    this.logoData = [
      {
        Name: 'Men',Title:'Men',DiscountValue:'20',Link:'/home/collection/men', Image: {
          src: 'https://placehold.co/50x50',
          alt: 'User',
          label: 'Logo 1001'
        },
        CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i> <i class="fa-regular fa-square-minus ms-1"></i>'
      },
      {
        Name: 'Women',Title:'Women',DiscountValue:'30',Link:'/home/collection/women', Image: {
          src: 'https://placehold.co/50x50',
          alt: 'User',
          label: 'Logo 1001'
        }, CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i>  <i class="fa-regular fa-square-minus ms-1"></i>'
      }
    ];
  }

  handleRowClick(row: any) {
    console.log('Row clicked:', row);
  }
  get f(){
    return this.categoryForm.controls;
  }
  onSubmit(){
    if(this.categoryForm.invalid){
      this.markAllFieldsAsTouched(this.categoryForm);
      return
    }
    console.log(this.categoryForm.value);
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
