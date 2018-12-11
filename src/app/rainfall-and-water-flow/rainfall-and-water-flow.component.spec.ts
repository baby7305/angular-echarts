import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainfallAndWaterFlowComponent } from './rainfall-and-water-flow.component';

describe('RainfallAndWaterFlowComponent', () => {
  let component: RainfallAndWaterFlowComponent;
  let fixture: ComponentFixture<RainfallAndWaterFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainfallAndWaterFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainfallAndWaterFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
