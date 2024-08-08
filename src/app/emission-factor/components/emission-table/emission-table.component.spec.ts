import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionTableComponent } from './emission-table.component';

describe('EmissionTableComponent', () => {
  let component: EmissionTableComponent;
  let fixture: ComponentFixture<EmissionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmissionTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmissionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
