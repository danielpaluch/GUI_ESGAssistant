import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { map, of } from 'rxjs';
import { inject } from '@angular/core';

export const hasCompanyGuard: CanActivateFn = () => {
  const router: Router = inject(Router);
  return of(false).pipe(
    map((company: boolean): UrlTree | boolean =>
      !company ? router.createUrlTree(['landing']) : true,
    ),
  );
};
