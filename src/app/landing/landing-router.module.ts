import { NgModule } from '@angular/core';
import { LandingContainerComponent } from './components/landing-container/landing-container.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: LandingContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRouterModule {}
