import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SettingsContainerComponent} from "./components/settings-container/settings-container.component";

const routes: Routes = [
  {
    path: '',
    component: SettingsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
