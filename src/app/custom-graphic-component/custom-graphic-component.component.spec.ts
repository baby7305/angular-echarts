import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomGraphicComponentComponent } from './custom-graphic-component.component';

describe('CustomGraphicComponentComponent', () => {
  let component: CustomGraphicComponentComponent;
  let fixture: ComponentFixture<CustomGraphicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomGraphicComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomGraphicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
