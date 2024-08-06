import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmissionFactor } from '../../models/emission-form.model';
import { DialogAddEmissionFactorComponent } from '../../components/dialog-add-emission-factor/dialog-add-emission-factor.component';

@Component({
  selector: 'app-emission-factor-main',
  templateUrl: './emission-factor-main.component.html',
  styleUrls: ['./emission-factor-main.component.scss'],
})
export class EmissionFactorMainComponent {
  components: EmissionFactor[] = [];

  constructor(private dialog: MatDialog) {}

  public addEmissionFactor(): void {
    const dialogRef = this.dialog.open(DialogAddEmissionFactorComponent);

    dialogRef
      .afterClosed()
      .subscribe((data: EmissionFactor | undefined | null) => {
        if (data) {
          this.components.push(data);
        }
      });
  }
}
