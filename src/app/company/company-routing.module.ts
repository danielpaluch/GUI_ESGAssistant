import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyWrapperComponent } from './conatiners/company-wrapper/company-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: 'overview',
        loadChildren: () =>
          import('../overview/overview.module').then((m) => m.OverviewModule),
      },
      {
        path: 'esg',
        loadChildren: () =>
          import('../emission-factor/emission-factor.module').then(
            (m) => m.EmissionFactorModule,
          ),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('../reports/reports.module').then((m) => m.ReportsModule),
      },
      {
        path: 'management',
        loadChildren: () =>
          import('../management/management.module').then(
            (m) => m.ManagementModule,
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'analyse',
        loadChildren: () =>
          import('../analyse/analyse.module').then((m) => m.AnalyseModule),
      },
    ],
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class CompanyRoutingModule {}
