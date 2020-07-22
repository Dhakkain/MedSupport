import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-patient-visit-data-dialog',
  templateUrl: './patient-visit-data-dialog.component.html',
  styleUrls: ['./patient-visit-data-dialog.component.css']
})
export class PatientVisitDataDialogComponent implements OnInit {
  public isReadOnly = true;

  ngOnInit(): void {
  }

  constructor(
    public dialogRef: MatDialogRef<PatientVisitDataDialogComponent>,
   ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
