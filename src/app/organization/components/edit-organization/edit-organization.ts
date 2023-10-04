import { Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { debounceTime, distinctUntilChanged, fromEvent, map, tap } from 'rxjs';
import * as XLSX from 'xlsx';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';

@Component({
    selector: 'edit-organization',
    templateUrl: './edit-organization.html',
    styleUrls: ['./edit-organization.scss']
  })
  export class EditOrganization {
    
  }