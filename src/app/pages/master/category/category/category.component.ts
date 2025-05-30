import { Component, ViewEncapsulation } from '@angular/core';
import { ReuseTableComponent } from '../../../../shared/reuse-table/reuse-table/reuse-table.component';

@Component({
  selector: 'app-category',
  imports: [ReuseTableComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent {
columnDefs: any[] = [];
  logoData: any[] = [];

  ngOnInit() {
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
}
