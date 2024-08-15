import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEmissionFactorComponent } from './dialog-emission-factor.component';

describe('DialogEmissionFactorComponent', () => {
  let component: DialogEmissionFactorComponent;
  let fixture: ComponentFixture<DialogEmissionFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogEmissionFactorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogEmissionFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
