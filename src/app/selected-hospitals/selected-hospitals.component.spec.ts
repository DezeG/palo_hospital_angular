import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedHospitalsComponent } from './selected-hospitals.component';

describe('SelectedHospitalsComponent', () => {
  let component: SelectedHospitalsComponent;
  let fixture: ComponentFixture<SelectedHospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedHospitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
