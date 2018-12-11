import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipAndDatazoomOnMobileComponent } from './tooltip-and-datazoom-on-mobile.component';

describe('TooltipAndDatazoomOnMobileComponent', () => {
  let component: TooltipAndDatazoomOnMobileComponent;
  let fixture: ComponentFixture<TooltipAndDatazoomOnMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipAndDatazoomOnMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipAndDatazoomOnMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
