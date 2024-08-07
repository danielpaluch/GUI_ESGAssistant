import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsContainerComponent } from './reports-container.component';

describe('ReportsContainerComponent', () => {
  let component: ReportsContainerComponent;
  let fixture: ComponentFixture<ReportsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
