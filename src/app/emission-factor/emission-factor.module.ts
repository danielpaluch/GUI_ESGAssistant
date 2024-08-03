import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmissionFactorMainComponent} from "./containers/emission-factor-main/emission-factor-main.component";
import {EmissionFactorRoutingModule} from "./emission-factor-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {CardComponent} from "../esg-lib/components/card/card.component";
import {MatAccordion, MatExpansionModule} from "@angular/material/expansion";
import {EmissionFormTableComponent} from "./components/emission-form-table/emission-form-table.component";

const MATERIAL_MODULES = [
  MatCardModule
]

@NgModule({
  declarations: [
    EmissionFactorMainComponent
  ],
  imports: [
    MATERIAL_MODULES,
    EmissionFactorRoutingModule,
    CommonModule,
    CardComponent,
    MatButtonModule,
    MatListModule,
    MatAccordion,
    MatExpansionModule,
    EmissionFormTableComponent
  ]
})
export class EmissionFactorModule { }
