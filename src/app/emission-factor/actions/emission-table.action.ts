import { EmissionFactor, EmissionFactorCreateData } from '../models/emission';
import { PaginatedData } from '../../shell/models/paginated-service.model';

const EMISSION_FACTOR_TABLE = '[Emission Factor Table]';

export class EmissionFactorTableActionGetAll {
  static readonly type = `${EMISSION_FACTOR_TABLE} Get all`;
  constructor(public payload: { page: number; pageSize: number }) {}
}

export class EmissionFactorTableActionGetAllSuccess {
  static readonly type = `${EMISSION_FACTOR_TABLE} Get success`;
  constructor(public payload: PaginatedData<EmissionFactor>) {}
}

export class EmissionFactorTableActionGetAllFailure {
  static readonly type = `${EMISSION_FACTOR_TABLE} Get all failure`;
  constructor(public payload: { error: unknown }) {}
}

export class EmissionFactorTableActionCreate {
  static readonly type = `${EMISSION_FACTOR_TABLE} Create`;
  constructor(public payload: EmissionFactorCreateData) {}
}

export class EmissionFactorTableActionCreateSuccess {
  static readonly type = `${EMISSION_FACTOR_TABLE} Create success`;
  constructor(public payload: EmissionFactor) {}
}

export class EmissionFactorTableActionCreateFailure {
  static readonly type = `${EMISSION_FACTOR_TABLE} Create failure`;
  constructor(public payload: { error: unknown }) {}
}

export class EmissionFactorTableActionUpdate {
  static readonly type = `${EMISSION_FACTOR_TABLE} Update`;
  constructor(public payload: { id: string; item: Partial<EmissionFactor> }) {}
}

export class EmissionFactorTableActionUpdateSuccess {
  static readonly type = `${EMISSION_FACTOR_TABLE} Update success`;
  constructor(public payload: EmissionFactor) {}
}

export class EmissionFactorTableActionUpdateFailure {
  static readonly type = `${EMISSION_FACTOR_TABLE} Update failure`;
  constructor(public payload: { error: unknown }) {}
}

export class EmissionFactorTableActionDelete {
  static readonly type = `${EMISSION_FACTOR_TABLE} Delete`;
  constructor(public payload: { id: string }) {}
}

export class EmissionFactorTableActionDeleteSuccess {
  static readonly type = `${EMISSION_FACTOR_TABLE} Delete success`;
  constructor(public payload: { id: string }) {}
}

export class EmissionFactorTableActionDeleteFailure {
  static readonly type = `${EMISSION_FACTOR_TABLE} Delete failure`;
  constructor(public payload: { error: unknown }) {}
}
