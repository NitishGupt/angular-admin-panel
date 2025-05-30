import { Component, ViewEncapsulation } from '@angular/core';
import { ReuseTableComponent } from '../../../../shared/reuse-table/reuse-table/reuse-table.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-user',
  imports: [ReuseTableComponent,RouterLink],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css',
  encapsulation:ViewEncapsulation.None
})
export class ListUserComponent {
 columnDefs: any[] = [];
  logoData: any[] = [];

  ngOnInit() {
    this.columnDefs = ['FirstName','LastName', 'Email', 'UserType','CreatedDate', 'Action'];

    this.logoData = [
      {
        FirstName: 'Byte',LastName:'Code',Email:'byteCode@gmail.com',UserType:'Admin', CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i> <i class="fa-regular fa-square-minus"></i>'
      },
      {
        FirstName: 'Shom',LastName:'Shah',Email:'shah@gmail.com',UserType:'Vendor', CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i>  <i class="fa-regular fa-square-minus"></i>'
      },
      {
        FirstName: 'Aarul',LastName:'Misht',Email:'aarul@gmail.com',UserType:'Customer', CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i>  <i class="fa-regular fa-square-minus"></i>'
      },
      {
        FirstName: 'Aura',LastName:'Nandi',Email:'aarul@gmail.com',UserType:'Customer', CreatedDate: new Date(), Action: '<i class="fa-regular fa-pen-to-square"></i>  <i class="fa-regular fa-square-minus"></i>'
      }
    ];
  }
  handleRowClick(row: any) {
    console.log('Row clicked:', row);
  }
}
