import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickToAddPointsComponent } from './click-to-add-points.component';

describe('ClickToAddPointsComponent', () => {
  let component: ClickToAddPointsComponent;
  let fixture: ComponentFixture<ClickToAddPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickToAddPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickToAddPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
