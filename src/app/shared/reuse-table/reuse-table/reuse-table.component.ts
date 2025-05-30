import { Component, Input, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { MatColumnDef, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reuse-table',
  standalone: true,
  imports: [CommonModule,MatTableModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatColumnDef
  ],
  templateUrl: './reuse-table.component.html',
  styleUrls: ['./reuse-table.component.css']
})
export class ReuseTableComponent  {
  @Input() displayedColumns: string[] = [];
  @Input() rowdata: any[] = [];
  @Output() rowClicked = new EventEmitter<any>();
 
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


   ngOnInit() {
  if (this.rowdata?.length) {
    this.dataSource = new MatTableDataSource(this.rowdata);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.rowdata);
    if (this.paginator) this.dataSource.paginator = this.paginator;
    if (this.sort) this.dataSource.sort = this.sort;
  }
  
 

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRowClicked(row: any) {
    this.rowClicked.emit(row);
  }
}
