import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'remove-organization',
    templateUrl: 'remove-organization.html',
  })
  export class RemoveOrganizationDialog {
    constructor(public dialogRef: MatDialogRef<RemoveOrganizationDialog>) {}
  }