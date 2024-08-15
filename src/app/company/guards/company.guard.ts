import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { ShellRoutes } from '../../shell/routes/shell.routes';
import { Actions, ofActionDispatched, Store } from '@ngxs/store';
import { distinctUntilChanged, filter, map } from 'rxjs';
import { CompanyStateModel } from '../models/company.model';
import { CompanySelector } from '../selectors/company.selector';
import {
  CompanyActionGet,
  CompanyActionGetSuccess,
} from '../actions/company.action';

export const hasCompanyGuard: CanActivateFn = () => {
  const router: Router = inject(Router);
  const store: Store = inject(Store);
  const actions: Actions = inject(Actions);

  store.dispatch(new CompanyActionGet());

  return actions.pipe(
    ofActionDispatched(CompanyActionGetSuccess),
    map((Action) => {
      if (Action.payload) {
        return true;
      } else {
        return router.createUrlTree(ShellRoutes.getLandingRoute());
      }
    }),
  );
  // return store.select(CompanySelector.getState).pipe(
  //   filter((state: CompanyStateModel) => !state.loading),
  //   distinctUntilChanged(),
  //   map((state: CompanyStateModel): boolean | UrlTree => {
  //     if (state.selectedEntity) {
  //       return true;
  //     } else {
  //       return router.createUrlTree(ShellRoutes.getLandingRoute());
  //     }
  //   }),
  // );
};

export const noCompanyGuard: CanActivateFn = () => {
  const router: Router = inject(Router);
  const store: Store = inject(Store);
  store.dispatch(new CompanyActionGet());

  return store.select(CompanySelector.getState).pipe(
    filter((state: CompanyStateModel) => !state.loading),
    distinctUntilChanged(),
    map((state: CompanyStateModel): boolean | UrlTree => {
      if (state.selectedEntity) {
        return router.createUrlTree(ShellRoutes.getCompanyRoute());
      } else {
        return true;
      }
    }),
  );
};
