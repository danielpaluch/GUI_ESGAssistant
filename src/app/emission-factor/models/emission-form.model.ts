import {
  CategoryConfig,
  FuelConfig,
  TypeConfig,
  UnitConfig,
} from './emission.model';

export interface EmissionList {
  emissions: Partial<EmissionFormModel>[];
}

export interface EmissionFormModel {
  type: TypeConfig | null;
  category: CategoryConfig | null;
  fuel: FuelConfig | null;
  amount: number | null;
  unit: UnitConfig | null;
}

export interface EmissionFactor {
  alias: string;
  description: string;
  emissions: Partial<EmissionList>;
}
