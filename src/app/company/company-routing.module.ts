import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { companyRoutes } from './const/company-routes.const';

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(companyRoutes)],
})
export class CompanyRoutingModule {}
