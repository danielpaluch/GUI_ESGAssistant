import { Selector } from '@ngxs/store';
import { EmissionFactorPaginatedStateModel } from '../models/emission';
import { EmissionFactorTableState } from '../state/emission-factors-table.state';

export class EmissionFactorTableStateSelectors {
  @Selector([EmissionFactorTableState])
  static getEmissionFactors(state: EmissionFactorPaginatedStateModel) {
    return state.entities;
  }

  @Selector([EmissionFactorTableState])
  static getTotalPages(state: EmissionFactorPaginatedStateModel) {
    const { totalItems, pageSize } = state;
    return Math.ceil(totalItems / pageSize);
  }

  @Selector([EmissionFactorTableState])
  static isLoading(state: EmissionFactorPaginatedStateModel) {
    return state.loading;
  }
}
