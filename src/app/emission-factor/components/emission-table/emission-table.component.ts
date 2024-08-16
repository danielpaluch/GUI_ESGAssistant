import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import { EmissionFactor } from '../../models/emission';
import { ITableColumn } from '../../../esg-lib/components/table/table.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-emission-table',
  templateUrl: './emission-table.component.html',
  styleUrl: './emission-table.component.scss',
})
export class EmissionTableComponent {
  @Input() emissionFactors: EmissionFactor[];

  @Input() loading: boolean;

  @ViewChild('empty') empty: TemplateRef<unknown>;

  @Output() addEmissionEvent: EventEmitter<void> = new EventEmitter<void>();

  @Output() pageChangedEvent: EventEmitter<PageEvent> =
    new EventEmitter<PageEvent>();

  @Output() deleteEvent: EventEmitter<EmissionFactor> =
    new EventEmitter<EmissionFactor>();

  @Output() editEvent: EventEmitter<EmissionFactor> =
    new EventEmitter<EmissionFactor>();

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

  edit(emissionFactor: EmissionFactor) {
    this.editEvent.emit(emissionFactor);
  }

  delete(emissionFactor: EmissionFactor) {
    this.deleteEvent.emit(emissionFactor);
  }

  onPageChanged(event: PageEvent) {
    this.pageChangedEvent.emit(event);
  }
}
