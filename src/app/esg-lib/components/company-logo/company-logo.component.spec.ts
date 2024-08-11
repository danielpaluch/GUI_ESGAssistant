import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLogoComponent } from './company-logo.component';

describe('CompanyLogoComponent', () => {
  let component: CompanyLogoComponent;
  let fixture: ComponentFixture<CompanyLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
