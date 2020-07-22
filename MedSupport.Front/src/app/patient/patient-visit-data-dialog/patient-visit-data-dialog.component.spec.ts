import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientVisitDataDialogComponent } from './patient-visit-data-dialog.component';

describe('PatientVisitDataDialogComponent', () => {
  let component: PatientVisitDataDialogComponent;
  let fixture: ComponentFixture<PatientVisitDataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientVisitDataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientVisitDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
