import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReuseTableComponent } from '../../../shared/reuse-table/reuse-table/reuse-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,ReuseTableComponent],
  templateUrl: './dashboard.component.html',
 styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {

  columnDefs: any[] = [];
  userData: any[] = [];

  ngOnInit() {
    this.columnDefs = ['OrderId' , 'OrderStatus','PaymentDate','PaymentMethod','PaymentStatus'];

    this.userData = [
      { OrderId: 1001, OrderStatus: 'Processing', PaymentDate: new Date(), PaymentMethod: 'Credit Card', PaymentStatus: 'Paid' },
      { OrderId: 1002, OrderStatus: 'Processing', PaymentDate: new Date(), PaymentMethod: 'Debit Card', PaymentStatus: 'Processing' }
    ];
  }

  handleRowClick(row: any) {
  console.log('Row clicked:', row);
}
}



