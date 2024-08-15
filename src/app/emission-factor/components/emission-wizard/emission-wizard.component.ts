import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { EmissionStepper } from '../../../esg-lib/models/wizard.model';
import {
  AsyncPipe,
  JsonPipe,
  NgClass,
  NgTemplateOutlet,
} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-emission-wizard',
  templateUrl: './emission-wizard.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    NgTemplateOutlet,
    NgClass,
    MatButtonModule,
    JsonPipe,
    MatStepperModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./emission-wizard.component.scss'],
})
export class EmissionWizardComponent {
  @Input() steps: EmissionStepper;

  @Input() loading: boolean;

  @Output() readonly submitEvent = new EventEmitter<void>();

  @ViewChild('stepper') stepper: MatStepper;

  public get stepperIndex(): number {
    if (this.stepper) {
      return this.stepper.selectedIndex;
    }
    return 0;
  }

  public get getStepKeys(): (keyof EmissionStepper)[] {
    return Object.keys(this.steps) as (keyof EmissionStepper)[];
  }

  public get last(): boolean {
    return this.stepperIndex + 1 === this.getStepKeys.length;
  }

  public submitForm() {
    this.submitEvent.emit();
  }
}
