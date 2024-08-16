import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmDeleteEmissionFactorComponent } from './dialog-confirm-delete-emission-factor.component';

describe('DialogConfirmDeleteEmissionFactorComponent', () => {
  let component: DialogConfirmDeleteEmissionFactorComponent;
  let fixture: ComponentFixture<DialogConfirmDeleteEmissionFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogConfirmDeleteEmissionFactorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      DialogConfirmDeleteEmissionFactorComponent,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
