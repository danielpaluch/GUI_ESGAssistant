import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmissionFactorMainComponent} from "./containers/emission-factor-main/emission-factor-main.component";
import {EmissionFactorRoutingModule} from "./emission-factor-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";


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
    MatButtonModule,
    MatListModule
  ]
})
export class EmissionFactorModule { }
