import { Component, ViewEncapsulation } from '@angular/core';
import { ReuseTableComponent } from '../../../../shared/reuse-table/reuse-table/reuse-table.component';

@Component({
  selector: 'app-color',
  imports: [ReuseTableComponent],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css',
  encapsulation:ViewEncapsulation.None
})
export class ColorComponent {
columnDefs: any[] = [];
  logoData: any[] = [];

  ngOnInit() {
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
}
