import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmissionFactor } from '../../models/emission';
import { DialogAddEmissionFactorComponent } from '../../components/dialog-add-emission-factor/dialog-add-emission-factor.component';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { EmissionFactorTableStateSelectors } from '../../selectors/emission-factor-table.selector';
import { DialogConfirmDeleteEmissionFactorComponent } from '../../components/dialog-confirm-delete-emission-factor/dialog-confirm-delete-emission-factor.component';
import { DialogEditEmissionFactorComponent } from '../../components/dialog-edit-emission-factor/dialog-edit-emission-factor.component';
import { EmissionFactorTableActionGetAll } from '../../actions/emission-table.action';

@Component({
  selector: 'app-emission-factor-main',
  templateUrl: './emission-factor-main.component.html',
  styleUrls: ['./emission-factor-main.component.scss'],
})
export class EmissionFactorMainComponent {
  constructor(
    private readonly dialog: MatDialog,
    private readonly store: Store,
  ) {}

  public get emissionFactors$(): Observable<EmissionFactor[] | null> {
    return this.store.select(
      EmissionFactorTableStateSelectors.getEmissionFactors,
    );
  }

  public get loadingEmissionFactors$(): Observable<boolean> {
    return this.store.select(EmissionFactorTableStateSelectors.isLoading);
  }

  public onPageChangedEvent(event: PageEvent) {
    this.store.dispatch(
      new EmissionFactorTableActionGetAll({
        page: event.pageIndex,
        pageSize: event.pageSize,
      }),
    );
  }

  public onDeleteEvent(emissionFactor: EmissionFactor) {
    this.dialog.open(DialogConfirmDeleteEmissionFactorComponent, {
      data: { emissionFactor: emissionFactor },
    });
  }

  public onEditEvent(emissionFactor: EmissionFactor) {
    this.dialog.open(DialogEditEmissionFactorComponent, {
      data: { emissionFactor: emissionFactor },
    });
  }

  public addEmissionFactor(): void {
    this.dialog.open(DialogAddEmissionFactorComponent);
  }
}
