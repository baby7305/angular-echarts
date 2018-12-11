import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureChangeInTheComingWeekComponent } from './temperature-change-in-the-coming-week.component';

describe('TemperatureChangeInTheComingWeekComponent', () => {
  let component: TemperatureChangeInTheComingWeekComponent;
  let fixture: ComponentFixture<TemperatureChangeInTheComingWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureChangeInTheComingWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureChangeInTheComingWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
