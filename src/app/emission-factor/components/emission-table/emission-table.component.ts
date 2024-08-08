import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import { EmissionFactor } from '../../models/emission-form.model';
import { ITableColumn } from '../../../esg-lib/components/table/table.component';

@Component({
  selector: 'app-emission-table',
  templateUrl: './emission-table.component.html',
  styleUrl: './emission-table.component.scss',
})
export class EmissionTableComponent {
  @Input() emissionFactors: EmissionFactor[];

  @ViewChild('empty') empty: TemplateRef<unknown>;

  @Output() addEmissionEvent: EventEmitter<void> = new EventEmitter<void>();

  displayedColumns: string[] = ['alias', 'description'];

  columns: ITableColumn<EmissionFactor>[] = [
    {
      name: 'alias',
      header: 'Alias',
      width: 300,
      accessor: (emission: Partial<EmissionFactor>) => emission.alias,
    },
    {
      name: 'description',
      header: 'Description',
      accessor: (emission: Partial<EmissionFactor>) => emission.description,
    },
  ];

  add() {
    this.addEmissionEvent.emit();
  }

  edit(emissionFactor: EmissionFactor) {}

  delete(emissionFactor: EmissionFactor) {}
}
