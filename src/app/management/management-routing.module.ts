import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementContainerComponent } from './components/management-container/management-container.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule {}
