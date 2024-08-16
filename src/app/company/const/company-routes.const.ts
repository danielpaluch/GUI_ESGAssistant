import { Routes } from '@angular/router';
import { CompanyWrapperComponent } from '../conatiners/company-wrapper/company-wrapper.component';

export enum CompanyRoutesEnum {
  OVERVIEW = 'overview',
  ESG = 'esg',
  REPORTS = 'reports',
  MANAGEMENT = 'management',
  SETTINGS = 'settings',
  ANALYSE = 'analyse',
  PROFILE = 'profile',
}

export const companyRoutes: Routes = [
  {
    path: '',
    component: CompanyWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: CompanyRoutesEnum.OVERVIEW,
        pathMatch: 'full',
      },
      {
        path: CompanyRoutesEnum.OVERVIEW,
        loadChildren: () =>
          import('../../overview/overview.module').then(
            (m) => m.OverviewModule,
          ),
      },
      {
        path: CompanyRoutesEnum.ESG,
        loadChildren: () =>
          import('../../emission-factor/emission-factor.module').then(
            (m) => m.EmissionFactorModule,
          ),
      },
      {
        path: CompanyRoutesEnum.REPORTS,
        loadChildren: () =>
          import('../../reports/reports.module').then((m) => m.ReportsModule),
      },
      {
        path: CompanyRoutesEnum.MANAGEMENT,
        loadChildren: () =>
          import('../../management/management.module').then(
            (m) => m.ManagementModule,
          ),
      },
      {
        path: CompanyRoutesEnum.PROFILE,
        loadChildren: () =>
          import('../../profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: CompanyRoutesEnum.SETTINGS,
        loadChildren: () =>
          import('../../settings/settings.module').then(
            (m) => m.SettingsModule,
          ),
      },
      {
        path: CompanyRoutesEnum.ANALYSE,
        loadChildren: () =>
          import('../../analyse/analyse.module').then((m) => m.AnalyseModule),
      },
    ],
  },
];
