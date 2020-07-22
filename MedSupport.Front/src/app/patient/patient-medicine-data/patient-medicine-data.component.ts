import { Component, OnInit } from '@angular/core';

export interface MedicineDataDto {
  position: number;
  date: string;
  name: string;
  dose: string;
}

const ELEMENT_DATA: MedicineDataDto[] = [
  {position: 1, date: '14.07.2020', name: 'Paracetamol',  dose: '2 night/ 2 morning' },
  {position: 2, date: '25.06.2020', name: 'Apap', dose: '3 per day by 2 pills' },
  {position: 3, date: '19.01.2020', name: 'Structum', dose: '1 before sleep/ 1 morning'},
];


@Component({
  selector: 'app-patient-medicine-data',
  templateUrl: './patient-medicine-data.component.html',
  styleUrls: ['./patient-medicine-data.component.css']
})
export class PatientMedicineDataComponent implements OnInit {
  displayedColumns: string[] = ['position',  'name', 'date', 'dose'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
