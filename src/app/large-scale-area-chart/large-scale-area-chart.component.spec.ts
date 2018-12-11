import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeScaleAreaChartComponent } from './large-scale-area-chart.component';

describe('LargeScaleAreaChartComponent', () => {
  let component: LargeScaleAreaChartComponent;
  let fixture: ComponentFixture<LargeScaleAreaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeScaleAreaChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeScaleAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
