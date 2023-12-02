import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmissionFactorComponent } from './add-emission-factor.component';

describe('AddEmissionFactorComponent', () => {
  let component: AddEmissionFactorComponent;
  let fixture: ComponentFixture<AddEmissionFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmissionFactorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEmissionFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
