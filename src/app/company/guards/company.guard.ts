import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { ShellRoutes } from '../../shell/routes/shell.routes';
import { Store } from '@ngxs/store';
import { CompanyState } from '../state/company.state';
import { distinctUntilChanged, filter, map } from 'rxjs';
import { CompanyStateModel } from '../models/company.model';
import { CompanyActions } from '../actions/company.action';

export const hasCompanyGuard: CanActivateFn = () => {
  const router: Router = inject(Router);
  const store: Store = inject(Store);

  store.dispatch(new CompanyActions.FetchCompany());

  return store.select(CompanyState.getState).pipe(
    filter((state: CompanyStateModel) => !state.loading), // Wait until loading is false
    distinctUntilChanged(),
    map((state: CompanyStateModel): boolean | UrlTree => {
      if (state.entities && state.entities.length > 0) {
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
  store.dispatch(new CompanyActions.FetchCompany());

  return store.select(CompanyState.getState).pipe(
    filter((state: CompanyStateModel) => !state.loading),
    distinctUntilChanged(),
    map((state: CompanyStateModel): boolean | UrlTree => {
      if (state.entities && state.entities.length > 0) {
        return router.createUrlTree(ShellRoutes.getCompanyRoute());
      } else {
        return true;
      }
    }),
  );
};
