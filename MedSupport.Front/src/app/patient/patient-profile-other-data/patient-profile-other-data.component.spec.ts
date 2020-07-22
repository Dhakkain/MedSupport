import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProfileOtherDataComponent } from './patient-profile-other-data.component';

describe('PatientProfileOtherDataComponent', () => {
  let component: PatientProfileOtherDataComponent;
  let fixture: ComponentFixture<PatientProfileOtherDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientProfileOtherDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientProfileOtherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
