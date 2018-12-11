import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeijingAqiComponent } from './beijing-aqi.component';

describe('BeijingAqiComponent', () => {
  let component: BeijingAqiComponent;
  let fixture: ComponentFixture<BeijingAqiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeijingAqiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeijingAqiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
