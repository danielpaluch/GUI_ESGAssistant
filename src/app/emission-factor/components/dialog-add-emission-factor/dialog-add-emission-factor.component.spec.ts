import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddEmissionFactorComponent } from './dialog-add-emission-factor.component';

describe('AddEmissionFactorComponent', () => {
  let component: DialogAddEmissionFactorComponent;
  let fixture: ComponentFixture<DialogAddEmissionFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddEmissionFactorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddEmissionFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
