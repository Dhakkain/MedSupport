import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  lastName: string;
  id: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Jan', lastName: 'Kowalski', id: 'H'},
  {position: 2, name: 'Elżbieta', lastName: 'Wars', id: 'He'},
  {position: 3, name: 'Karol', lastName: 'Wars', id: 'Li'},
  {position: 4, name: 'Beryllium', lastName: 'Bazyl', id: 'Be'},
  {position: 5, name: 'Boron', lastName: 'Maron', id: 'B'},
  {position: 6, name: 'Carbon', lastName: 'Nitro', id: 'C'},
  {position: 7, name: 'Nitrogen', lastName: '14.0067', id: 'N'},
  {position: 8, name: 'Oxygen', lastName: '15.9994', id: 'O'},
  {position: 9, name: 'Fluorine', lastName:' 18.9984', id: 'F'},
  {position: 10, name: 'Neon', lastName: '20.1797', id: 'Ne'},
];

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
