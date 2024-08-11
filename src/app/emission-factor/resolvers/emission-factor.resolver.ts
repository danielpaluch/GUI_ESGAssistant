import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { FetchEmissionFactors } from '../actions/emission-table.action';

export const emissionFactorResolver: ResolveFn<void> = () => {
  const store: Store = inject(Store);
  store.dispatch(new FetchEmissionFactors({ page: 1, pageSize: 10 }));
};
