import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalyseContainerComponent } from './analyse-container.component';

describe('AnalyseContainerComponent', () => {
  let component: AnalyseContainerComponent;
  let fixture: ComponentFixture<AnalyseContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyseContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
