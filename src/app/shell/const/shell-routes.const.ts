import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import {
  hasCompanyGuard,
  noCompanyGuard,
} from '../../company/guards/company.guard';

export enum ShellRoutesEnum {
  COMPANY = 'company',
  LANDING = 'landing',
}

export const shellRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: ShellRoutesEnum.COMPANY,
        pathMatch: 'full',
      },
      {
        path: ShellRoutesEnum.COMPANY,
        canActivate: [hasCompanyGuard],
        loadChildren: () =>
          import('../../company/company.module').then((m) => m.CompanyModule),
      },
      {
        path: ShellRoutesEnum.LANDING,
        canActivate: [noCompanyGuard],
        loadChildren: () =>
          import('../../landing/landing.module').then((m) => m.LandingModule),
      },
    ],
  },
];
