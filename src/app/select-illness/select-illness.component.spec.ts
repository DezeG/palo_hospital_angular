import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIllnessComponent } from './select-illness.component';

describe('SelectIllnessComponent', () => {
  let component: SelectIllnessComponent;
  let fixture: ComponentFixture<SelectIllnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectIllnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectIllnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
