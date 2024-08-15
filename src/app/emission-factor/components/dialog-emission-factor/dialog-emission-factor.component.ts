import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { EmissionStepper } from '../../../esg-lib/models/wizard.model';
import { EmissionFirstStepGroup } from '../../forms/emission-first-step.form';
import { EmissionSecondStepGroup } from '../../forms/emission-second-step.form';
import { EmissionThirdStepGroup } from '../../forms/emission-third-step.form';
import { EmissionWizardComponent } from '../emission-wizard/emission-wizard.component';
import { FormFirstStepComponent } from '../form-first-step/form-first-step.component';
import { FormSecondStepComponent } from '../form-second-step/form-second-step.component';
import { FormThirdStepComponent } from '../form-third-step/form-third-step.component';
import { MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-emission-factor',
  standalone: true,
  templateUrl: './dialog-emission-factor.component.html',
  imports: [
    EmissionWizardComponent,
    FormFirstStepComponent,
    FormSecondStepComponent,
    FormThirdStepComponent,
    MatDialogTitle,
    MatDialogContent,
  ],
  styleUrl: './dialog-emission-factor.component.scss',
})
export class DialogEmissionFactorComponent implements AfterViewInit {
  @Input() loading: boolean;

  @Input({ required: true }) firstStepForm: EmissionFirstStepGroup;

  @Input({ required: true }) secondStepForm: EmissionSecondStepGroup;

  @Input({ required: true }) thirdStepForm: EmissionThirdStepGroup;

  @Output() submitEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('firstStep')
  firstStepTemplate: TemplateRef<HTMLElement>;

  @ViewChild('secondStep')
  secondStepTemplate: TemplateRef<HTMLElement>;

  @ViewChild('thirdStep')
  thirdStepTemplate: TemplateRef<HTMLElement>;

  steps: EmissionStepper;

  submit() {
    this.submitEvent.emit();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.steps = {
        description: {
          label: 'Fill description',
          template: this.firstStepTemplate,
          formGroup: this.firstStepForm,
        },
        formula: {
          label: 'Formula',
          template: this.secondStepTemplate,
          formGroup: this.thirdStepForm,
        },
        summary: {
          label: 'Summary',
          template: this.thirdStepTemplate,
          formGroup: this.thirdStepForm,
        },
      };
    });
  }
}
