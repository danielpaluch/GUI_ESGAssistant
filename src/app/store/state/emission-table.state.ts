import { EmissionFactor } from '../../emission-factor/models/emission-form.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  AddEmissionFactor,
  FetchEmissionFactors,
  FetchEmissionFactorsFailure,
  FetchEmissionFactorsSuccess,
  SetPagination,
} from '../actions/emission-table.action';

export class EmissionFactorStateModel {
  emissionFactors: EmissionFactor[];
  currentPage: number;
  pageSize: number;
  totalItems: number;
  loading: boolean;
  error: string | null;
}

@State<EmissionFactorStateModel>({
  name: 'EMISSION_FACTORS',
  defaults: {
    emissionFactors: [],
    currentPage: 1,
    pageSize: 10,
    totalItems: 0,
    loading: false,
    error: null,
  },
})
export class EmissionFactorState {
  @Selector()
  static getEmissionFactors(state: EmissionFactorStateModel) {
    return state.emissionFactors;
  }

  @Selector()
  static getPaginatedEmissionFactors(state: EmissionFactorStateModel) {
    const { emissionFactors, currentPage, pageSize } = state;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return emissionFactors.slice(startIndex, endIndex);
  }

  @Selector()
  static getTotalPages(state: EmissionFactorStateModel) {
    const { totalItems, pageSize } = state;
    return Math.ceil(totalItems / pageSize);
  }

  @Selector()
  static isLoading(state: EmissionFactorStateModel) {
    return state.loading;
  }

  @Selector()
  static getError(state: EmissionFactorStateModel) {
    return state.error;
  }

  @Action(FetchEmissionFactors)
  fetchEmissionFactors(
    ctx: StateContext<EmissionFactorStateModel>,
    { payload }: FetchEmissionFactors,
  ) {
    // const { page, pageSize } = payload;
    // ctx.patchState({ loading: true });
    //
    // return this.http.get<{ emissionFactors: EmissionFactor[]; totalItems: number }>(`/api/emission-factors`, {
    //   params: {
    //     page: page.toString(),
    //     pageSize: pageSize.toString()
    //   }
    // }).subscribe({
    //     next: (response:{emissionFactors: EmissionFactor[]; totalItems: number }): void => {
    //       ctx.dispatch(new FetchEmissionFactorsSuccess(response));
    //     },
    //     error: (): void => {
    //       ctx.dispatch(new FetchEmissionFactorsFailure('Failed to load emission factors'));
    //     },
    //   }
    // );
  }

  @Action(FetchEmissionFactorsSuccess)
  fetchEmissionFactorsSuccess(
    ctx: StateContext<EmissionFactorStateModel>,
    { payload }: FetchEmissionFactorsSuccess,
  ) {
    const { emissionFactors, totalItems } = payload;
    ctx.patchState({
      emissionFactors,
      totalItems,
      loading: false,
      error: null,
    });
  }

  @Action(FetchEmissionFactorsFailure)
  fetchEmissionFactorsFailure(
    ctx: StateContext<EmissionFactorStateModel>,
    { payload }: FetchEmissionFactorsFailure,
  ) {
    ctx.patchState({
      loading: false,
      error: payload,
    });
  }

  @Action(SetPagination)
  setPagination(
    ctx: StateContext<EmissionFactorStateModel>,
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
    ctx: StateContext<EmissionFactorStateModel>,
    { payload }: AddEmissionFactor,
  ) {
    const state = ctx.getState();

    ctx.patchState({
      emissionFactors: [...state.emissionFactors, payload],
      totalItems: state.totalItems + 1,
    });
  }
}
