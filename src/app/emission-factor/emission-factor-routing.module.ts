import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmissionFactorMainComponent } from './containers/emission-factor-main/emission-factor-main.component';
import { emissionFactorResolver } from './resolvers/emission-factor.resolver';

const routes: Routes = [
  {
    path: '',
    component: EmissionFactorMainComponent,
    resolve: {
      emissions: emissionFactorResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmissionFactorRoutingModule {}
