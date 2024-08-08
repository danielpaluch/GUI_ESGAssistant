import { Component, DestroyRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmissionFactor } from '../../models/emission-form.model';
import { DialogAddEmissionFactorComponent } from '../../components/dialog-add-emission-factor/dialog-add-emission-factor.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngxs/store';
import { AddEmissionFactor } from '../../actions/emission-table.action';
import { Observable } from 'rxjs';
import { EmissionFactorState } from '../../state/emission-table.state';

@Component({
  selector: 'app-emission-factor-main',
  templateUrl: './emission-factor-main.component.html',
  styleUrls: ['./emission-factor-main.component.scss'],
})
export class EmissionFactorMainComponent {
  constructor(
    private readonly dialog: MatDialog,
    private readonly destroyRef: DestroyRef,
    private readonly store: Store,
  ) {}

  get emissionFactors$(): Observable<EmissionFactor[]> {
    return this.store.select(EmissionFactorState.getEmissionFactors);
  }

  public addEmissionFactor(): void {
    const dialogRef = this.dialog.open(DialogAddEmissionFactorComponent);

    dialogRef
      .afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data: EmissionFactor | undefined | null) => {
        if (data) {
          this.store.dispatch(new AddEmissionFactor(data));
        }
      });
  }
}
