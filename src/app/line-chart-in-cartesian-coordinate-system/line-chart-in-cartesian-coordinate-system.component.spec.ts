import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartInCartesianCoordinateSystemComponent } from './line-chart-in-cartesian-coordinate-system.component';

describe('LineChartInCartesianCoordinateSystemComponent', () => {
  let component: LineChartInCartesianCoordinateSystemComponent;
  let fixture: ComponentFixture<LineChartInCartesianCoordinateSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartInCartesianCoordinateSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartInCartesianCoordinateSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
