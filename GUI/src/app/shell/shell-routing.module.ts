import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmissionFactorRoutingModule} from "../emission-factor/emission-factor-routing.module";
import {MainComponent} from "./main/main.component";



const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'emission-factor',
    loadChildren: () =>
      import('../emission-factor/emission-factor.module').then(
        (m) => m.EmissionFactorModule,
      ),
  },
  // { path: '',   redirectTo: '/emission-factor', pathMatch: 'full' },
  // { path: 'second-component', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
