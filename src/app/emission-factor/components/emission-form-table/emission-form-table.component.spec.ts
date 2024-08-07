import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionFormTableComponent } from './emission-form-table.component';

describe('EmissionFormTableComponent', () => {
  let component: EmissionFormTableComponent;
  let fixture: ComponentFixture<EmissionFormTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmissionFormTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmissionFormTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
