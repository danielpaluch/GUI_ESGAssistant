import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionFactorMainComponent } from './emission-factor-main.component';

describe('EmissionFactorMainComponent', () => {
  let component: EmissionFactorMainComponent;
  let fixture: ComponentFixture<EmissionFactorMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmissionFactorMainComponent],
    });
    fixture = TestBed.createComponent(EmissionFactorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
