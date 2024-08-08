import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {
  MatButton,
  MatIconButton,
  MatMiniFabButton,
} from '@angular/material/button';
import {
  EmissionFormModel,
  EmissionList,
} from '../../models/emission-form.model';
import { MatIcon } from '@angular/material/icon';
import {
  ITableColumn,
  TableComponent,
} from '../../../esg-lib/components/table/table.component';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-emission-form-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatButton,
    MatIcon,
    MatMiniFabButton,
    MatIconButton,
    TableComponent,
    MatTabGroup,
    MatTab,
  ],
  templateUrl: './emission-form-table.component.html',
  styleUrl: './emission-form-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmissionFormTableComponent {
  @Input() formValue: EmissionList;

  @Input() showDeleteColumn = false;

  @Output() readonly deleteRow: EventEmitter<number> =
    new EventEmitter<number>();

  columns: ITableColumn<EmissionFormModel>[] = [
    {
      name: 'type',
      header: 'Type',
      accessor: (emission: EmissionFormModel) => emission.type?.label,
    },
    {
      name: 'category',
      header: 'Category',
      accessor: (emission: EmissionFormModel) => emission.category?.label,
    },
    {
      name: 'fuel',
      header: 'Fuel',
      accessor: (emission: EmissionFormModel) => emission.fuel?.label,
    },
    {
      name: 'amount',
      header: 'Amount',
      accessor: (emission: EmissionFormModel) => emission.amount,
    },
    {
      name: 'unit',
      header: 'Unit',
      accessor: (emission: EmissionFormModel) => emission.unit?.label,
    },
  ];

  displayedColumns: string[] = ['type', 'category', 'fuel', 'amount', 'unit'];

  public get dataSource(): EmissionFormModel[] {
    return this.formValue.emissions || [];
  }

  public get groupedEmissionsByKeys() {
    return Object.keys(this.groupedEmissions);
  }

  // public remove(index: number) {
  //   this.deleteRow.emit(index);
  // }

  public get groupedEmissions() {
    const emissions: (EmissionFormModel | undefined)[] =
      this.formValue.emissions || [];

    const groups: Record<string, EmissionFormModel[]> = {};

    for (const emission of emissions) {
      if (!emission) continue;
      const type = emission.type?.label || 'Unknown';
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(emission);
    }

    return groups;
  }
}
