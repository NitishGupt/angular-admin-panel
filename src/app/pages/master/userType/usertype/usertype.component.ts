import { Component, ViewEncapsulation } from '@angular/core';
import { ReuseTableComponent } from '../../../../shared/reuse-table/reuse-table/reuse-table.component';

@Component({
  selector: 'app-usertype',
  imports: [ReuseTableComponent],
  templateUrl: './usertype.component.html',
  styleUrl: './usertype.component.css',
  encapsulation:ViewEncapsulation.None
})
export class UsertypeComponent {
columnDefs: any[] = [];
  logoData: any[] = [];

  ngOnInit() {
    this.columnDefs = ['Name','CreatedDate', 'Action'];

    this.logoData = [
      {
        Name: 'Admin', CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i> <i class="fa-regular fa-square-minus ms-1"></i>'
      },
      {
        Name: 'Vendor',  CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i>  <i class="fa-regular fa-square-minus ms-1"></i>'
      },
      {
        Name: 'Customer', CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i>  <i class="fa-regular fa-square-minus ms-1"></i>'
      }
     
    ];
  }

  handleRowClick(row: any) {
    console.log('Row clicked:', row);
  }
}
