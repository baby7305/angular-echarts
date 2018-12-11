import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineEasingComponent } from './line-easing.component';

describe('LineEasingComponent', () => {
  let component: LineEasingComponent;
  let fixture: ComponentFixture<LineEasingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineEasingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineEasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
