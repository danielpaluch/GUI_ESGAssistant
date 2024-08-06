import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { hasCompanyGuard } from './guards/company.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'company',
        pathMatch: 'full',
      },
      {
        path: 'company',
        canActivate: [hasCompanyGuard],
        loadChildren: () =>
          import('../company/company.module').then((m) => m.CompanyModule),
      },
      {
        path: 'landing',
        loadChildren: () =>
          import('../landing/landing.module').then((m) => m.LandingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
