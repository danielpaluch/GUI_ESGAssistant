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
import { EmissionWizardComponent } from './components/emission-wizard/emission-wizard.component';
import { FormFirstStepComponent } from './components/form-first-step/form-first-step.component';
import { FormSecondStepComponent } from './components/form-second-step/form-second-step.component';
import { FormThirdStepComponent } from './components/form-third-step/form-third-step.component';

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatAccordion,
  MatExpansionModule,
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
];

@NgModule({
  declarations: [EmissionFactorMainComponent, EmissionTableComponent],
  imports: [
    MATERIAL_MODULES,
    EmissionFactorRoutingModule,
    CommonModule,
    CardComponent,
    EmissionFormTableComponent,
    TableComponent,
    EmissionWizardComponent,
    FormFirstStepComponent,
    FormSecondStepComponent,
    FormThirdStepComponent,
  ],
})
export class EmissionFactorModule {}
