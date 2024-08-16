import { Component, DestroyRef } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { FormFirstStepComponent } from '../form-first-step/form-first-step.component';
import { TextFormFieldComponent } from '../../../esg-lib/components/text-form-field/text-form-field.component';
import { FormSecondStepComponent } from '../form-second-step/form-second-step.component';
import { EmissionWizardComponent } from '../emission-wizard/emission-wizard.component';
import { EmissionFactorCreateData } from '../../models/emission';
import { FormThirdStepComponent } from '../form-third-step/form-third-step.component';
import { EmissionFirstStepGroup } from '../../forms/emission-first-step.form';
import { EmissionSecondStepGroup } from '../../forms/emission-second-step.form';
import { EmissionThirdStepGroup } from '../../forms/emission-third-step.form';
import { Actions, ofActionDispatched, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { EmissionFactorTableStateSelectors } from '../../selectors/emission-factor-table.selector';
import { DialogEmissionFactorComponent } from '../dialog-emission-factor/dialog-emission-factor.component';
import {
  EmissionFactorTableActionCreate,
  EmissionFactorTableActionCreateSuccess,
} from '../../actions/emission-table.action';

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
    AsyncPipe,
    DialogEmissionFactorComponent,
  ],
  templateUrl: './dialog-add-emission-factor.component.html',
  styleUrl: './dialog-add-emission-factor.component.scss',
})
export class DialogAddEmissionFactorComponent {
  firstStepForm: EmissionFirstStepGroup = new EmissionFirstStepGroup();

  secondStepForm: EmissionSecondStepGroup = new EmissionSecondStepGroup();

  thirdStepForm: EmissionThirdStepGroup = new EmissionThirdStepGroup();

  constructor(
    public dialogRef: MatDialogRef<DialogAddEmissionFactorComponent>,
    private actions: Actions,
    private destroyRef: DestroyRef,
    private store: Store,
  ) {}

  get loading$(): Observable<boolean> {
    return this.store.select(EmissionFactorTableStateSelectors.isLoading);
  }

  public onSave(): void {
    const { alias, description } = this.firstStepForm.value;

    const emissionFactor: EmissionFactorCreateData = {
      alias: alias ?? '',
      description: description ?? '',
      emissions: this.thirdStepForm.emissionsThirdStepValues,
    };

    this.store.dispatch(new EmissionFactorTableActionCreate(emissionFactor));

    this.actions
      .pipe(
        ofActionDispatched(EmissionFactorTableActionCreateSuccess),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.dialogRef.close());
  }
}
