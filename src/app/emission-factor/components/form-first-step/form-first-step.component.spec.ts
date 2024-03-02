import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFirstStepComponent } from './form-first-step.component';

describe('FormFirstStepComponent', () => {
  let component: FormFirstStepComponent;
  let fixture: ComponentFixture<FormFirstStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFirstStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFirstStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
