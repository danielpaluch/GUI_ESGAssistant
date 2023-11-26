import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmissionFactorMainComponent} from "./containers/emission-factor-main/emission-factor-main.component";



const routes: Routes = [
  { path: '', component: EmissionFactorMainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmissionFactorRoutingModule { }
