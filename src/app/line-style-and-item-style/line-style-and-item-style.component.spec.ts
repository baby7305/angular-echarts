import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineStyleAndItemStyleComponent } from './line-style-and-item-style.component';

describe('LineStyleAndItemStyleComponent', () => {
  let component: LineStyleAndItemStyleComponent;
  let fixture: ComponentFixture<LineStyleAndItemStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineStyleAndItemStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineStyleAndItemStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
