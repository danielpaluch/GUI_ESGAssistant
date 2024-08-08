import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPlanInfoComponent } from './current-plan-info.component';

describe('CurrentPlanInfoComponent', () => {
  let component: CurrentPlanInfoComponent;
  let fixture: ComponentFixture<CurrentPlanInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentPlanInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentPlanInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
