import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ShellRoutes } from '../../shell/routes/shell.routes';
import { Store } from '@ngxs/store';
import { CompanyState, CompanyStateModel } from '../state/company.state';
import { distinctUntilChanged, filter, map } from 'rxjs';
import { FetchCompany } from '../actions/company.action';

export const hasCompanyGuard: CanActivateFn = () => {
  const router: Router = inject(Router);
  const store: Store = inject(Store);

  // Dispatch action to fetch companies
  store.dispatch(new FetchCompany());

  return store.select(CompanyState.getState).pipe(
    filter((state) => !state.loading), // Wait until loading is false
    distinctUntilChanged(),
    map((state: CompanyStateModel) => {
      if (state.data && state.data.length > 0) {
        return true;
      } else {
        return router.createUrlTree(ShellRoutes.getLandingRoute());
      }
    }),
  );
};

export const noCompanyGuard: CanActivateFn = () => {
  const router: Router = inject(Router);
  const store: Store = inject(Store);
  store.dispatch(new FetchCompany());

  return store.select(CompanyState.getState).pipe(
    filter((state) => !state.loading),
    distinctUntilChanged(),
    map((state: CompanyStateModel) => {
      if (state.data && state.data.length > 0) {
        return router.createUrlTree(ShellRoutes.getCompanyRoute());
      } else {
        return true;
      }
    }),
  );
};
