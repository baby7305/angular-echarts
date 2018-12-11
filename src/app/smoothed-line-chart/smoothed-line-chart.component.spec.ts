import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothedLineChartComponent } from './smoothed-line-chart.component';

describe('SmoothedLineChartComponent', () => {
  let component: SmoothedLineChartComponent;
  let fixture: ComponentFixture<SmoothedLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothedLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothedLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
