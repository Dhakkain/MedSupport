import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProfileBasicDataComponent } from './patient-profile-basic-data.component';

describe('PatientProfileBasicDataComponent', () => {
  let component: PatientProfileBasicDataComponent;
  let fixture: ComponentFixture<PatientProfileBasicDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientProfileBasicDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientProfileBasicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
