import { Component, DestroyRef, Inject } from '@angular/core';
import { EmissionFirstStepGroup } from '../../forms/emission-first-step.form';
import { EmissionSecondStepGroup } from '../../forms/emission-second-step.form';
import { EmissionThirdStepGroup } from '../../forms/emission-third-step.form';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Actions, ofActionDispatched, Store } from '@ngxs/store';
import { EmissionFactor } from '../../models/emission';
import { AsyncPipe } from '@angular/common';
import { DialogEmissionFactorComponent } from '../dialog-emission-factor/dialog-emission-factor.component';
import { Observable } from 'rxjs';
import { EmissionFactorTableStateSelectors } from '../../selectors/emission-factor-table.selector';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  EmissionFactorTableActionUpdate,
  EmissionFactorTableActionUpdateSuccess,
} from '../../actions/emission-table.action';

@Component({
  selector: 'app-dialog-edit-emission-factor',
  templateUrl: './dialog-edit-emission-factor.component.html',
  styleUrl: './dialog-edit-emission-factor.component.scss',
  standalone: true,
  imports: [AsyncPipe, DialogEmissionFactorComponent],
})
export class DialogEditEmissionFactorComponent {
  firstStepForm: EmissionFirstStepGroup = new EmissionFirstStepGroup();

  secondStepForm: EmissionSecondStepGroup = new EmissionSecondStepGroup();

  thirdStepForm: EmissionThirdStepGroup = new EmissionThirdStepGroup();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { emissionFactor: EmissionFactor },
    public dialogRef: MatDialogRef<DialogEditEmissionFactorComponent>,
    private actions: Actions,
    private destroyRef: DestroyRef,
    private store: Store,
  ) {
    this.firstStepForm.setValue({
      alias: this.data.emissionFactor.alias,
      description: this.data.emissionFactor.description,
    });

    // this.thirdStepForm.controls.emissions.setValue( this.data.emissionFactor.emissions)
  }

  get loading$(): Observable<boolean> {
    return this.store.select(EmissionFactorTableStateSelectors.isLoading);
  }

  public onSave(): void {
    const { alias, description } = this.firstStepForm.value;

    const id = this.data.emissionFactor.id;
    const item: Partial<EmissionFactor> = {
      ...(alias != null && { alias }),
      ...(description != null && { description }),
      emissions: this.thirdStepForm.emissionsThirdStepValues,
    };

    this.store.dispatch(new EmissionFactorTableActionUpdate({ id, item }));

    this.actions
      .pipe(
        ofActionDispatched(EmissionFactorTableActionUpdateSuccess),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.dialogRef.close());
  }
}
