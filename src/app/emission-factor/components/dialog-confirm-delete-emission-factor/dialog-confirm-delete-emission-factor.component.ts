import { Component, DestroyRef, Inject } from '@angular/core';
import { DialogConfirmComponent } from '../../../esg-lib/components/dialog-confirm/dialog-confirm.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmissionFactor } from '../../models/emission';
import { Actions, ofActionDispatched, Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EmissionFactorTableStateSelectors } from '../../selectors/emission-factor-table.selector';
import { AsyncPipe } from '@angular/common';
import {
  EmissionFactorTableActionDelete,
  EmissionFactorTableActionDeleteSuccess,
} from '../../actions/emission-table.action';

@Component({
  selector: 'app-dialog-confirm-delete-emission-factor',
  standalone: true,
  imports: [DialogConfirmComponent, AsyncPipe],
  templateUrl: './dialog-confirm-delete-emission-factor.component.html',
  styleUrl: './dialog-confirm-delete-emission-factor.component.scss',
})
export class DialogConfirmDeleteEmissionFactorComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { emissionFactor: EmissionFactor },
    private dialogRef: MatDialogRef<DialogConfirmDeleteEmissionFactorComponent>,
    private store: Store,
    private actions: Actions,
    private destroyRef: DestroyRef,
  ) {}

  get title(): string {
    return `Are you sure you want to delete ${this.data.emissionFactor.alias}?`;
  }

  get loading$(): Observable<boolean> {
    return this.store.select(EmissionFactorTableStateSelectors.isLoading);
  }

  onConfirm() {
    this.store.dispatch(
      new EmissionFactorTableActionDelete(this.data.emissionFactor),
    );

    this.actions
      .pipe(
        ofActionDispatched(EmissionFactorTableActionDeleteSuccess),
        tap(() => this.dialogRef.close()),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }
}
