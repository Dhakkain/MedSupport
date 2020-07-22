import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientContactDataComponent } from './patient-contact-data.component';

describe('PatientContactDataComponent', () => {
  let component: PatientContactDataComponent;
  let fixture: ComponentFixture<PatientContactDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientContactDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientContactDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
