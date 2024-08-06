import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { map, of } from 'rxjs';
import { inject } from '@angular/core';

export const hasCompanyGuard: CanActivateFn = () => {
  const router: Router = inject(Router);

  console.log(router.config);
  return of(true).pipe(
    map((company: boolean): UrlTree | boolean =>
      !company ? router.createUrlTree(['landing']) : true,
    ),
  );
};
