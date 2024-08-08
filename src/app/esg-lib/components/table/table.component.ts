import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatIconButton,
    MatRow,
    MatRowDef,
    MatTable,
    MatProgressSpinner,
    NgTemplateOutlet,
    MatHeaderCellDef,
    MatNoDataRow,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<T> implements OnInit {
  @Input({ required: true }) set data(data: T[]) {
    if (data) this.dataSource = new MatTableDataSource(data);
  }
  @Input({ required: true }) columns: ITableColumn<T>[];

  @Input({ required: true }) displayedColumns: string[];

  @Input() pageSizeOptions: number[] = [10, 20, 50];

  @Input() itemsPerPage = 10;

  @Input() optionsEnabled = false;

  @Input() emptyTableTemplate: TemplateRef<unknown>;

  @Output() rowClickEvent = new EventEmitter<T>();

  @Output() rowEditEvent = new EventEmitter<T>();

  @Output() rowDeleteEvent = new EventEmitter<T>();

  @ViewChild('optionsTemplate', { static: true })
  optionsTemplate: TemplateRef<unknown>;

  public dataSource: MatTableDataSource<T>;

  ngOnInit() {
    if (this.optionsEnabled) {
      this.addOptionsColumn();
    }
  }

  public addOptionsColumn(): void {
    const columnOption: ITableColumn<T> = {
      name: 'options',
      header: 'Options',
      dataTemplate: this.optionsTemplate,
      width: 200,
      accessor: (item) => item,
    };
    const displayedColumnOption: string = columnOption.name;

    if (!this.displayedColumns.includes(displayedColumnOption)) {
      this.displayedColumns.push(displayedColumnOption);
      this.columns.push(columnOption);
    }
  }

  onRowClick(row: T): void {
    this.rowClickEvent.emit(row);
  }

  onRowEdit(row: T): void {
    this.rowEditEvent.emit(row);
  }

  onRowDelete(row: T): void {
    this.rowDeleteEvent.emit(row);
  }
}

export interface ITableColumn<T> {
  name: string;
  accessor?: (data: T) => unknown;
  sortingDisabled?: boolean;
  header?: string;
  headerTemplate?: TemplateRef<unknown>;
  dataTemplate?: TemplateRef<unknown>;
  footerTemplate?: TemplateRef<unknown>;
  width?: number;
  widthPercent?: number;
}
