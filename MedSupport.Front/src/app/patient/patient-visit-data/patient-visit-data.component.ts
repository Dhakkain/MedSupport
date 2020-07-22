import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PatientVisitDataDialogComponent} from '../patient-visit-data-dialog/patient-visit-data-dialog.component';
export interface VisitDataDto {
  date: string;
  position: number;
  doctor: string;
  specialist: string;
  clinic : string;
}

const ELEMENT_DATA: VisitDataDto[] = [
  {position: 1, date: '14.07.2020', doctor: 'dr. Pajonk',  specialist: 'Internist', clinic: 'Hospital str. Glowna' },
  {position: 2, date: '25.06.2020', doctor: 'dr. Dupa', specialist: 'Cardiologists', clinic: 'Hospital str. Dziura w dupie' },
  {position: 3, date: '19.01.2020', doctor: 'dr. Pajonk', specialist: 'Internist', clinic: 'Hospital str. Glowna' },
  {position: 4, date: '25.11.2019', doctor: 'dr. Pajonk', specialist: 'Internist', clinic: 'Hospital str. Glowna' },
];

@Component({
  selector: 'app-patient-visit-data',
  templateUrl: './patient-visit-data.component.html',
  styleUrls: ['./patient-visit-data.component.css']
})
export class PatientVisitDataComponent implements OnInit {
  displayedColumns: string[] = ['position', 'date', 'doctor', 'specialist', 'clinic' ,'action'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    const dialogRef = this.dialog.open(PatientVisitDataDialogComponent, {
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
