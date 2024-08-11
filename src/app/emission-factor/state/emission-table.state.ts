import { EmissionFactor } from '../models/emission';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  AddEmissionFactor,
  AddEmissionFactorFailure,
  AddEmissionFactorSuccess,
  FetchEmissionFactors,
  FetchEmissionFactorsFailure,
  FetchEmissionFactorsSuccess,
  SetPagination,
} from '../actions/emission-table.action';
import {
  PaginatedBaseState,
  PaginatedBaseStateModel,
} from '../../shell/state/paginated-base.state';
import { EmissionsFactorService } from '../services/emission-table.service';
import { inject } from '@angular/core';
import { PaginatedData } from '../../shell/models/paginated-service.model';
import { HttpErrorResponse } from '@angular/common/http';

export interface EmissionFactorPaginatedStateModel
  extends PaginatedBaseStateModel<EmissionFactor> {}

@State<EmissionFactorPaginatedStateModel>({
  name: 'EMISSION_FACTORS',
  defaults: {
    data: [],
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
    return state.data;
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

  @Action(FetchEmissionFactors)
  fetchEmissionFactors(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: FetchEmissionFactors,
  ) {
    const { page, pageSize } = payload;
    ctx.patchState({ loading: true });

    return this.httpService.getAllPaginated(page, pageSize).subscribe({
      next: (response: PaginatedData<EmissionFactor>): void => {
        ctx.dispatch(new FetchEmissionFactorsSuccess(response));
      },
      error: (error: HttpErrorResponse): void => {
        ctx.dispatch(new FetchEmissionFactorsFailure(error));
      },
    });
  }

  @Action(FetchEmissionFactorsSuccess)
  fetchEmissionFactorsSuccess(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: FetchEmissionFactorsSuccess,
  ) {
    const { data, page, pageSize } = payload;
    ctx.patchState({
      data: data,
      pageSize,
      currentPage: page,
      loading: false,
      error: null,
    });
  }

  @Action(FetchEmissionFactorsFailure)
  fetchEmissionFactorsFailure(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: FetchEmissionFactorsFailure,
  ) {
    const { error } = payload;
    ctx.patchState({
      loading: false,
      error: error,
    });
  }

  @Action(SetPagination)
  setPagination(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: SetPagination,
  ) {
    const { currentPage, pageSize } = payload;
    ctx.patchState({
      currentPage,
      pageSize,
    });

    ctx.dispatch(new FetchEmissionFactors({ page: currentPage, pageSize }));
  }

  @Action(AddEmissionFactor)
  addEmissionFactor(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: AddEmissionFactor,
  ) {
    ctx.patchState({ loading: true });

    return this.httpService.create(payload).subscribe({
      next: (response: EmissionFactor): void => {
        ctx.dispatch(new AddEmissionFactorSuccess(response));
      },
      error: (): void => {
        ctx.dispatch(
          new AddEmissionFactorFailure('Failed to load emission factors'),
        );
      },
    });
  }

  @Action(AddEmissionFactorSuccess)
  addEmissionFactorSuccess(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: AddEmissionFactor,
  ) {
    const state = ctx.getState();

    const updatedData = payload ? [...state.data, payload] : state.data;

    console.log(updatedData);

    ctx.patchState({
      loading: false,
      error: null,
      data: updatedData,
    });

    // ctx.dispatch(new FetchEmissionFactors({page: 1,pageSize:10}));
  }
}
