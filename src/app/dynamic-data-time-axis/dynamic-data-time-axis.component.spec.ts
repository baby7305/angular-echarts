import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDataTimeAxisComponent } from './dynamic-data-time-axis.component';

describe('DynamicDataTimeAxisComponent', () => {
  let component: DynamicDataTimeAxisComponent;
  let fixture: ComponentFixture<DynamicDataTimeAxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDataTimeAxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDataTimeAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
