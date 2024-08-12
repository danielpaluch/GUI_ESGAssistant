import { EmissionFactor } from '../models/emission';
export namespace EmissionFactorActions {
  export class FetchEmissionFactors {
    static readonly type = '[EmissionFactor] Fetch';
    constructor(public payload: { page: number; pageSize: number }) {}
  }

  export class SetPagination {
    static readonly type = '[EmissionFactor] Set Pagination';
    constructor(public payload: { currentPage: number; pageSize: number }) {}
  }

  export class AddEmissionFactor {
    static readonly type = '[EmissionFactor] Add Emission Factor';
    constructor(public payload: EmissionFactor) {}
  }
}
