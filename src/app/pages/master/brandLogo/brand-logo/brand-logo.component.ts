import { Component, ViewEncapsulation } from '@angular/core';
import { ReuseTableComponent } from '../../../../shared/reuse-table/reuse-table/reuse-table.component';

@Component({
  selector: 'app-brand-logo',
  imports: [ReuseTableComponent],
  templateUrl: './brand-logo.component.html',
  styleUrl: './brand-logo.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BrandLogoComponent {
  columnDefs: any[] = [];
  logoData: any[] = [];

  ngOnInit() {
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

  handleRowClick(row: any) {
    console.log('Row clicked:', row);
  }
}
