import { Component, ViewEncapsulation } from '@angular/core';
import { ReuseTableComponent } from '../../../../shared/reuse-table/reuse-table/reuse-table.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ReuseTableComponent,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  encapsulation:ViewEncapsulation.None
})
export class ProductListComponent {
columnDefs: any[] = [];
  logoData: any[] = [];

  ngOnInit() {
    this.columnDefs = ['Name','Code', 'Price', 'SalePrice','Quantity','AddedBy','Role','AddedDate', 'Action'];

    this.logoData = [
      {
        Name: 'US POLO',Code:'M01',Price:'610',SalePrice:'510',Quantity:'50',AddedBy:'Nitish',Role:'Admin', AddedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i> <i class="fa-regular fa-square-minus"></i>'
      },
      {
        Name: 'HRX',Code:'M02',Price:'750',SalePrice:'650',Quantity:'40',AddedBy:'Byte',Role:'Admin', AddedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i>  <i class="fa-regular fa-square-minus"></i>'
      }
      
    ];
  }
  handleRowClick(row: any) {
    console.log('Row clicked:', row);
  }
}
