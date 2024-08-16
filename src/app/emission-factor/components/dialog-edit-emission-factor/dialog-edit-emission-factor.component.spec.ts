import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditEmissionFactorComponent } from './dialog-edit-emission-factor.component';

describe('DialogEditEmissionFactorComponent', () => {
  let component: DialogEditEmissionFactorComponent;
  let fixture: ComponentFixture<DialogEditEmissionFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogEditEmissionFactorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogEditEmissionFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
