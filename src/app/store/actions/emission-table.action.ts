import { EmissionFactor } from '../../emission-factor/models/emission-form.model';

export class FetchEmissionFactors {
  static readonly type = '[EmissionFactor] Fetch';
  constructor(public payload: { page: number; pageSize: number }) {}
}

export class FetchEmissionFactorsSuccess {
  static readonly type = '[EmissionFactor] Fetch Success';
  constructor(
    public payload: { emissionFactors: EmissionFactor[]; totalItems: number },
  ) {}
}

export class FetchEmissionFactorsFailure {
  static readonly type = '[EmissionFactor] Fetch Failure';
  constructor(public payload: string) {}
}

export class SetPagination {
  static readonly type = '[EmissionFactor] Set Pagination';
  constructor(public payload: { currentPage: number; pageSize: number }) {}
}

export class AddEmissionFactor {
  static readonly type = '[EmissionFactor] Add';
  constructor(public payload: EmissionFactor) {}
}
