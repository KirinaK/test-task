import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ELEMENT_DATA } from '../shared/constants';

@Component({
  selector: 'app-app-tabe',
  templateUrl: './app-tabe.component.html',
  styleUrls: ['./app-tabe.component.scss']
})
export class AppTabeComponent implements OnInit {
  public tableData: MatTableDataSource<any>;
  public columns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor() { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.initTable();
  }

  public applyFilter(filterValue: string): void {
    filterValue = filterValue.trim().toLowerCase();
    this.tableData.filter = filterValue;
  }

  private initTable(): void {
    this.tableData = new MatTableDataSource(ELEMENT_DATA);
    this.tableData.sort = this.sort;
  }

}
