import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoValueAxesInPolar2Component } from './two-value-axes-in-polar2.component';

describe('TwoValueAxesInPolar2Component', () => {
  let component: TwoValueAxesInPolar2Component;
  let fixture: ComponentFixture<TwoValueAxesInPolar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoValueAxesInPolar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoValueAxesInPolar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
