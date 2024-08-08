import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { EmissionStepper } from '../../../esg-lib/models/wizard.model';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { FormFirstStepComponent } from '../form-first-step/form-first-step.component';
import { TextFormFieldComponent } from '../../../esg-lib/components/text-form-field/text-form-field.component';
import { FormSecondStepComponent } from '../form-second-step/form-second-step.component';
import { EmissionWizardComponent } from '../emission-wizard/emission-wizard.component';
import { EmissionFactor } from '../../models/emission-form.model';
import { FormThirdStepComponent } from '../form-third-step/form-third-step.component';
import { EmissionFirstStepGroup } from '../../forms/emission-first-step.form';
import { EmissionSecondStepGroup } from '../../forms/emission-second-step.form';
import { EmissionThirdStepGroup } from '../../forms/emission-third-step.form';

@Component({
  standalone: true,
  imports: [
    EmissionWizardComponent,
    MatInputModule,
    FormsModule,
    TextFormFieldComponent,
    FormFirstStepComponent,
    FormSecondStepComponent,
    FormThirdStepComponent,
  ],
  templateUrl: './dialog-add-emission-factor.component.html',
  styleUrl: './dialog-add-emission-factor.component.scss',
})
export class DialogAddEmissionFactorComponent implements AfterViewInit {
  @ViewChild('firstStep')
  firstStepTemplate: TemplateRef<HTMLElement>;

  @ViewChild('secondStep')
  secondStepTemplate: TemplateRef<HTMLElement>;

  @ViewChild('thirdStep')
  thirdStepTemplate: TemplateRef<HTMLElement>;

  steps: EmissionStepper;

  firstStepForm: EmissionFirstStepGroup = new EmissionFirstStepGroup();

  secondStepForm: EmissionSecondStepGroup = new EmissionSecondStepGroup();

  thirdStepForm: EmissionThirdStepGroup = new EmissionThirdStepGroup();

  constructor(
    public dialogRef: MatDialogRef<DialogAddEmissionFactorComponent>,
  ) {}

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

  public onSave(): void {
    const { alias, description } = this.firstStepForm.value;

    const emissionFactor: EmissionFactor = {
      alias: alias ?? '',
      description: description ?? '',
      emissions: this.thirdStepForm.emissionsThirdStepValues,
    };
    this.dialogRef.close(emissionFactor);
  }
}
