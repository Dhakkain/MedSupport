import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedicineDataComponent } from './patient-medicine-data.component';

describe('PatientMedicineDataComponent', () => {
  let component: PatientMedicineDataComponent;
  let fixture: ComponentFixture<PatientMedicineDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMedicineDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMedicineDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
