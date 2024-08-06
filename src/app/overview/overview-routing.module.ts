import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewContainerComponent } from './components/overview-container/overview-container.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewRoutingModule {}
