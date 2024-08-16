import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellContainerComponent } from './shell-container.component';

describe('ShellContainerComponent', () => {
  let component: ShellContainerComponent;
  let fixture: ComponentFixture<ShellContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
