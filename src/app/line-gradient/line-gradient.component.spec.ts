import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineGradientComponent } from './line-gradient.component';

describe('LineGradientComponent', () => {
  let component: LineGradientComponent;
  let fixture: ComponentFixture<LineGradientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineGradientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
