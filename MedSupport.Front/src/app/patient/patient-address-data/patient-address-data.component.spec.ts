import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAddressDataComponent } from './patient-address-data.component';

describe('PatientAddressDataComponent', () => {
  let component: PatientAddressDataComponent;
  let fixture: ComponentFixture<PatientAddressDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAddressDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAddressDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
