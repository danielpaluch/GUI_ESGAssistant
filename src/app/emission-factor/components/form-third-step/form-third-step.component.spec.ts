import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThirdStepComponent } from './form-third-step.component';

describe('FormThirdStepComponent', () => {
  let component: FormThirdStepComponent;
  let fixture: ComponentFixture<FormThirdStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormThirdStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormThirdStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
