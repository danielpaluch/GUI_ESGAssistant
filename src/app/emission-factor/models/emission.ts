import {
  CategoryConfig,
  FuelConfig,
  TypeConfig,
  UnitConfig,
} from './emission.model';
import { FormArray, FormControl } from '@angular/forms';
import { EmissionSecondStepGroup } from '../forms/emission-second-step.form';

export interface EmissionThirdStepControls {
  emissions: FormArray<EmissionSecondStepGroup>;
}

export interface Emission {
  type: TypeConfig | null;
  category: CategoryConfig | null;
  fuel: FuelConfig | null;
  amount: number | null;
  unit: UnitConfig | null;
}

export interface EmissionSecondStepControls {
  type: FormControl<TypeConfig | null>;
  category: FormControl<CategoryConfig | null>;
  fuel: FormControl<FuelConfig | null>;
  amount: FormControl<number | null>;
  unit: FormControl<UnitConfig | null>;
}

export interface EmissionFactor {
  id?: string;
  alias: string;
  description: string;
  emissions: Emission[];
}
