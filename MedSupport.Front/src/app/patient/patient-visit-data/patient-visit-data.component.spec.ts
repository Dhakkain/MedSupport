import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientVisitDataComponent } from './patient-visit-data.component';

describe('PatientVisitDataComponent', () => {
  let component: PatientVisitDataComponent;
  let fixture: ComponentFixture<PatientVisitDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientVisitDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientVisitDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
