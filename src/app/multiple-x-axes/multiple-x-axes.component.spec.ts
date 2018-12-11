import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleXAxesComponent } from './multiple-x-axes.component';

describe('MultipleXAxesComponent', () => {
  let component: MultipleXAxesComponent;
  let fixture: ComponentFixture<MultipleXAxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleXAxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleXAxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
