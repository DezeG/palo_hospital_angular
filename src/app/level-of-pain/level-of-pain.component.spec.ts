import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelOfPainComponent } from './level-of-pain.component';

describe('LevelOfPainComponent', () => {
  let component: LevelOfPainComponent;
  let fixture: ComponentFixture<LevelOfPainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelOfPainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelOfPainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
