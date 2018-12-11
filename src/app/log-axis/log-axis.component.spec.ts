import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAxisComponent } from './log-axis.component';

describe('LogAxisComponent', () => {
  let component: LogAxisComponent;
  let fixture: ComponentFixture<LogAxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogAxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
