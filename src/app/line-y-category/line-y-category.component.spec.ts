import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineYCategoryComponent } from './line-y-category.component';

describe('LineYCategoryComponent', () => {
  let component: LineYCategoryComponent;
  let fixture: ComponentFixture<LineYCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineYCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineYCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
