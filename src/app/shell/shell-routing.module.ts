import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'asd',
    pathMatch: 'full',
    redirectTo: 'overview',
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
      import('../management/management.module').then((m) => m.ManagementModule),
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
