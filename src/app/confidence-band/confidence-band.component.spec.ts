import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceBandComponent } from './confidence-band.component';

describe('ConfidenceBandComponent', () => {
  let component: ConfidenceBandComponent;
  let fixture: ComponentFixture<ConfidenceBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidenceBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidenceBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
