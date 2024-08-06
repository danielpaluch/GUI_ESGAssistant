import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSecondStepComponent } from './form-second-step.component';

describe('FormFirstStepComponent', () => {
  let component: FormSecondStepComponent;
  let fixture: ComponentFixture<FormSecondStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSecondStepComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormSecondStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
