import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoValueAxesInPolar1Component } from './two-value-axes-in-polar1.component';

describe('TwoValueAxesInPolar1Component', () => {
  let component: TwoValueAxesInPolar1Component;
  let fixture: ComponentFixture<TwoValueAxesInPolar1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoValueAxesInPolar1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoValueAxesInPolar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
