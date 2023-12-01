import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnalyseContainerComponent} from "./components/analyse-container/analyse-container.component";

const routes: Routes = [
  {
    path: '',
    component: AnalyseContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyseRoutingModule {}
