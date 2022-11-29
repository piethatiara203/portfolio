import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateGasolineComponent } from './calculate-gasoline.component';

describe('CalculateGasolineComponent', () => {
  let component: CalculateGasolineComponent;
  let fixture: ComponentFixture<CalculateGasolineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateGasolineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateGasolineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
