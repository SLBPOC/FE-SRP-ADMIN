import { Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { debounceTime, distinctUntilChanged, fromEvent, map, tap } from 'rxjs';
import * as XLSX from 'xlsx';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';


export interface PeriodicElement {
  No: Number;
  Name: String;
  State: String;
  contact_name: String;
  service_asset_group: Number;
  action: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {No: 1, Name:'Initech - North America', State: 'Active', contact_name : 'Maxwell Lawrance ', service_asset_group: 5, action:'view'},
  {No: 2, Name:'Initech Product Center', State: 'Inactive', contact_name : 'Alan Frog', service_asset_group: 3, action:'view'},
  {No: 3, Name:'Initech Great North', State: 'Active', contact_name : 'David Johnson', service_asset_group: 0, action:'view'}
];

@Component({
    selector: 'view-organization',
    templateUrl: './view-organization.html',
    styleUrls: ['./view-organization.scss']
  })
  export class ViewOrganization {
    displayedColumns: string[] = ['No','Name','State', 'contact_name', 'service_asset_group', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) matSort!: MatSort;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    }
  }