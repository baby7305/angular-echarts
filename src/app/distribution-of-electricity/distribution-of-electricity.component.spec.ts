import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionOfElectricityComponent } from './distribution-of-electricity.component';

describe('DistributionOfElectricityComponent', () => {
  let component: DistributionOfElectricityComponent;
  let fixture: ComponentFixture<DistributionOfElectricityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionOfElectricityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionOfElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
