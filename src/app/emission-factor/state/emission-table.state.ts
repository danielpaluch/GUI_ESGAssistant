import { EmissionFactor } from '../models/emission';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import {
  PaginatedBaseState,
  PaginatedBaseStateModel,
} from '../../shell/state/paginated-base.state';
import { EmissionsFactorService } from '../services/emission-table.service';
import { inject } from '@angular/core';
import { EmissionFactorActions } from '../actions/emission-table.action';

export interface EmissionFactorPaginatedStateModel
  extends PaginatedBaseStateModel<EmissionFactor> {}

@State<EmissionFactorPaginatedStateModel>({
  name: 'EMISSION_FACTORS',
  defaults: {
    entities: [],
    selectedEntity: null,
    currentPage: 1,
    pageSize: 10,
    totalItems: 0,
    loading: false,
    error: null,
  },
})
export class EmissionFactorState extends PaginatedBaseState<EmissionFactor> {
  httpService: EmissionsFactorService = inject(EmissionsFactorService);

  @Selector()
  static getEmissionFactors(state: EmissionFactorPaginatedStateModel) {
    return state.entities;
  }

  @Selector()
  static getTotalPages(state: EmissionFactorPaginatedStateModel) {
    const { totalItems, pageSize } = state;
    return Math.ceil(totalItems / pageSize);
  }

  @Selector()
  static isLoading(state: EmissionFactorPaginatedStateModel) {
    return state.loading;
  }

  @Selector()
  static getError(state: EmissionFactorPaginatedStateModel) {
    return state.error;
  }

  @Action(EmissionFactorActions.FetchEmissionFactors)
  fetchEmissionFactors(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: EmissionFactorActions.FetchEmissionFactors,
  ) {
    return this.getAllPaginated(ctx, payload);
  }

  @Action(EmissionFactorActions.SetPagination)
  setPagination(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: EmissionFactorActions.SetPagination,
  ) {
    const { currentPage, pageSize } = payload;
    ctx.patchState({
      currentPage,
      pageSize,
    });

    ctx.dispatch(
      new EmissionFactorActions.FetchEmissionFactors({
        page: currentPage,
        pageSize,
      }),
    );
  }

  @Action(EmissionFactorActions.AddEmissionFactor)
  addEmissionFactor(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: EmissionFactorActions.AddEmissionFactor,
  ) {
    return this.createEntity(ctx, payload);
  }
}
