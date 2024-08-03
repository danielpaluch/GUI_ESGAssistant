import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionWizardComponent } from './emission-wizard.component';

describe('WizardComponent', () => {
  let component: EmissionWizardComponent;
  let fixture: ComponentFixture<EmissionWizardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmissionWizardComponent]
    });
    fixture = TestBed.createComponent(EmissionWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
