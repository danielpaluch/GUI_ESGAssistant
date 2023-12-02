import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StepModel} from "../../models/wizard.model";
import {BehaviorSubject, Observable} from "rxjs";
import {AsyncPipe, NgClass, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    NgTemplateOutlet,
    NgClass
  ],
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit{


  @Input() stepConfig!: StepModel[];

  @Output() readonly submit = new EventEmitter<void>();


  steps$!: BehaviorSubject<StepModel[]>
  currentStep$!: BehaviorSubject<StepModel>

  constructor() { }

  ngOnInit(): void {
    console.log(this.stepConfig)
    this.steps$= new BehaviorSubject<StepModel[]>(this.stepConfig);
    this.currentStep$ = new BehaviorSubject<StepModel>(this.stepConfig[0]);
  }

  onNextStep() {
    if (!this.isLastStep()) {
      this.moveToNextStep();
    } else {
      this.onSubmit();
    }
  }

  showButtonLabel() {
    return !this.isLastStep() ? 'Continue' : 'Finish';
  }

  onSubmit(): void {
      this.submit.emit()
  }


  onStepClick(step: StepModel) {
    this.currentStep$.next(step);
  }
  getCurrentStep(): Observable<StepModel> {
    return this.currentStep$.asObservable();
  }

  getSteps(): Observable<StepModel[]> {
    return this.steps$.asObservable();
  }

  moveToNextStep(): void {
    const index = this.currentStep$.value.stepIndex;

    if (index < this.steps$.value.length) {
      this.currentStep$.next(this.steps$.value[index]);
    }
  }

  isLastStep(): boolean {
    return this.currentStep$.value.stepIndex === this.steps$.value.length;
  }
}
