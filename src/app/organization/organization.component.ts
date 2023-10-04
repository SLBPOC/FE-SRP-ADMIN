import { Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { debounceTime, distinctUntilChanged, fromEvent, map, tap } from 'rxjs';
import * as XLSX from 'xlsx';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { RemoveOrganizationDialog } from './components/remove-organization/remove-organization';
import { AddOrganizationDialog } from './components/add-organization/add-organization';


export interface PeriodicElement {
  organization_Name: String;
  type: String;
  status: String;
  realms: string;
  nimbus_group_ids: String;
  business_unit: Number;
  action: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { organization_Name:'Alec Corp', type: 'Customer', status : 'Active', realms: 'alec.corp.com, slb.com', nimbus_group_ids: 'alec_group', business_unit: 5, action:'view'},
  { organization_Name:'Agora', type: 'Service', status : 'Active', realms: 'agoraiot.com, slb.com', nimbus_group_ids: 'N/A', business_unit: 12, action:'view'},
  { organization_Name:'SLB', type: 'Service', status : 'Active', realms: 'slb.com', nimbus_group_ids: 'N/A', business_unit: 0, action:'view'},
  { organization_Name:'Initech', type: 'Service', status : 'Active', realms: 'initech.com', nimbus_group_ids: 'N/A', business_unit: 12, action:'view'},
  { organization_Name:'Organization Name 1', type: 'Customer', status : 'Active', realms: 'on1.com, slb.com', nimbus_group_ids: 'on1_group, on1a_group', business_unit: 11, action:'view / Remove'},
  { organization_Name:'Organization Name 2', type: 'Customer', status : 'Active', realms: 'on2.com, slb.com', nimbus_group_ids: 'on2_group', business_unit: 11, action:'view'},
  { organization_Name:'Organization Name 3', type: 'Customer', status : 'Active', realms: 'on3.com, slb.com', nimbus_group_ids: 'on3_group, on3_pa_group', business_unit: 11, action:'view'},
  { organization_Name:'Initech', type: 'Customer', status : 'Active', realms: 'on4.com', nimbus_group_ids: 'on4_group', business_unit: 11, action:'view'},
  
];

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent {
  constructor(public dialog: MatDialog) {}
  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void { 
    this.dialog.open(RemoveOrganizationDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  addOrgDialog(enterAnimationDuration: string, exitAnimationDuration: string): void { 
    this.dialog.open(AddOrganizationDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  displayedColumns: string[] = ['organization_Name','type', 'status', 'realms', 'nimbus_group_ids', 'business_unit', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matSort;
  }
  
}
