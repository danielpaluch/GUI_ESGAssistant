import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { EmissionFactorTableActionGetAll } from '../actions/emission-table.action';

export const emissionFactorResolver: ResolveFn<void> = () => {
  const store: Store = inject(Store);
  store.dispatch(
    new EmissionFactorTableActionGetAll({ page: 1, pageSize: 10 }),
  );
};
