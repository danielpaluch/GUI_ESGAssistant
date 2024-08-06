import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyWrapperComponent } from './company-wrapper.component';

describe('CompanyWrapperComponent', () => {
  let component: CompanyWrapperComponent;
  let fixture: ComponentFixture<CompanyWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
