import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'remove-confirmation',
    templateUrl: 'remove-confirmation.html',
  })
  export class RemoveConfirmationDialog {
    constructor(public dialogRef: MatDialogRef<RemoveConfirmationDialog>) {}
  }