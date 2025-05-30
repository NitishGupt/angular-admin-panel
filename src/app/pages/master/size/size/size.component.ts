import { Component, ViewEncapsulation } from '@angular/core';
import { ReuseTableComponent } from '../../../../shared/reuse-table/reuse-table/reuse-table.component';

@Component({
  selector: 'app-size',
  imports: [ReuseTableComponent],
  templateUrl: './size.component.html',
  styleUrl: './size.component.css',
  encapsulation:ViewEncapsulation.None
})
export class SizeComponent {
 columnDefs: any[] = [];
  logoData: any[] = [];

  ngOnInit() {
    this.columnDefs = ['Name','CreatedDate', 'Action'];

    this.logoData = [
      {
        Name: 'XS', CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i> <i class="fa-regular fa-square-minus ms-1"></i>'
      },
      {
        Name: 'S',  CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i>  <i class="fa-regular fa-square-minus ms-1"></i>'
      },
      {
        Name: 'M',  CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i>  <i class="fa-regular fa-square-minus ms-1"></i>'
      },
      {
        Name: 'L',  CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i>  <i class="fa-regular fa-square-minus ms-1"></i>'
      }
    ];
  }

  handleRowClick(row: any) {
    console.log('Row clicked:', row);
  }
}
