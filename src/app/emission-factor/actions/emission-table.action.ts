import { EmissionFactor } from '../models/emission';
import { PaginatedData } from '../../shell/models/paginated-service.model';
import { HttpErrorResponse } from '@angular/common/http';

export class FetchEmissionFactors {
  static readonly type = '[EmissionFactor] Fetch';
  constructor(public payload: { page: number; pageSize: number }) {}
}

export class FetchEmissionFactorsSuccess {
  static readonly type = '[EmissionFactor] Fetch Success';
  constructor(public payload: PaginatedData<EmissionFactor>) {}
}

export class FetchEmissionFactorsFailure {
  static readonly type = '[EmissionFactor] Fetch Failure';
  constructor(public payload: HttpErrorResponse) {}
}

export class SetPagination {
  static readonly type = '[EmissionFactor] Set Pagination';
  constructor(public payload: { currentPage: number; pageSize: number }) {}
}

export class AddEmissionFactor {
  static readonly type = '[EmissionFactor] Add Emission Factor';
  constructor(public payload: EmissionFactor) {}
}

export class AddEmissionFactorSuccess {
  static readonly type = '[EmissionFactor]  Add Emission Factor Success';
  constructor(public payload: EmissionFactor) {}
}

export class AddEmissionFactorFailure {
  static readonly type = '[EmissionFactor]  Add Emission Factor Failure';
  constructor(public payload: string) {}
}
