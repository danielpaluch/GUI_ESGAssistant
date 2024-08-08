import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmissionFactorMainComponent } from './containers/emission-factor-main/emission-factor-main.component';
import { EmissionFactorRoutingModule } from './emission-factor-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CardComponent } from '../esg-lib/components/card/card.component';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { EmissionFormTableComponent } from './components/emission-form-table/emission-form-table.component';
import { MatStepperPrevious } from '@angular/material/stepper';
import { EmissionTableComponent } from './components/emission-table/emission-table.component';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { TableComponent } from '../esg-lib/components/table/table.component';

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatAccordion,
  MatExpansionModule,
];

@NgModule({
  declarations: [EmissionFactorMainComponent, EmissionTableComponent],
  imports: [
    MATERIAL_MODULES,
    EmissionFactorRoutingModule,
    CommonModule,
    CardComponent,
    EmissionFormTableComponent,
    MatStepperPrevious,
    MatTable,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatIcon,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    TableComponent,
  ],
})
export class EmissionFactorModule {}
