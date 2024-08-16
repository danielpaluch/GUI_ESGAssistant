import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import {
  hasCompanyGuard,
  noCompanyGuard,
} from '../../company/guards/company.guard';
import { ShellRoutesEnum } from '../models/shell-routes.model';
import { ShellContainerComponent } from '../containers/shell-container/shell-container.component';

export const shellRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ShellContainerComponent,
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
        loadChildren: () =>
          import('../../landing/landing.module').then((m) => m.LandingModule),
        canActivate: [noCompanyGuard],
      },
    ],
  },
];
