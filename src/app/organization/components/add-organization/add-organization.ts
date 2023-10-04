import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'add-organization',
    templateUrl: './add-organization.html',
    styleUrls: ['./add-organization.scss']
  })
  export class AddOrganizationDialog {
    constructor(public dialogRef: MatDialogRef<AddOrganizationDialog>) {}
  }