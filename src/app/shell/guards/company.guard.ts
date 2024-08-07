import {
  CanActivateFn,
  RedirectCommand,
  Router,
  UrlTree,
} from '@angular/router';
import { inject } from '@angular/core';
import { ShellRoutes } from '../routes/shell.routes';

const hasCompany = true;

export const hasCompanyGuard: CanActivateFn = () => {
  const router: Router = inject(Router);

  if (!hasCompany) {
    const urlTree: UrlTree = router.createUrlTree(
      ShellRoutes.getLandingRoute(),
    );
    return new RedirectCommand(urlTree);
  }

  return true;
};

export const noCompanyGuard: CanActivateFn = () => {
  const router: Router = inject(Router);

  if (hasCompany) {
    const urlTree: UrlTree = router.createUrlTree(
      ShellRoutes.getCompanyRoute(),
    );
    return new RedirectCommand(urlTree);
  }

  return true;
};
