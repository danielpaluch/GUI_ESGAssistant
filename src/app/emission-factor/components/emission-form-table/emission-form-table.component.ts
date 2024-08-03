import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MatTableModule} from "@angular/material/table";
import {MatButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {EmissionList} from "../../models/emission-form.model";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-emission-form-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatButton,
    MatIcon,
    MatMiniFabButton,
    MatIconButton
  ],
  templateUrl: './emission-form-table.component.html',
  styleUrl: './emission-form-table.component.scss'
})
export class EmissionFormTableComponent implements OnInit{

  @Input() formValue: Partial<EmissionList>;

  @Input() showDeleteColumn: boolean = false;

  @Output() readonly deleteRow: EventEmitter<number> = new EventEmitter<number>();


  displayedColumns: string[] = ['type', 'category', 'fuel', 'amount', 'unit'];

  ngOnInit() {
    if (this.showDeleteColumn) this.displayedColumns.push('delete')
  }

  public get dataSource(){
    return this.formValue.emissions || [];
  }

  public get groupedEmissionsByKeys() {
    return Object.keys(this.groupedEmissions);
  }

  public remove(index: number){
    this.deleteRow.emit(index)
  }

  public get groupedEmissions() {
    const emissions = this.formValue.emissions || [];
    return emissions.reduce((groups: {[key: string]: any[]}, emission: any) => {
      const type = emission.type.label || 'Unknown';
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(emission);
      return groups;
    }, {});
  }
}
