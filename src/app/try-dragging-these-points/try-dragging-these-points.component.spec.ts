import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryDraggingThesePointsComponent } from './try-dragging-these-points.component';

describe('TryDraggingThesePointsComponent', () => {
  let component: TryDraggingThesePointsComponent;
  let fixture: ComponentFixture<TryDraggingThesePointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryDraggingThesePointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryDraggingThesePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
