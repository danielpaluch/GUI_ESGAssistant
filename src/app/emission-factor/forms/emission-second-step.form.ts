import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NonNegativeNumberValidator } from '../../esg-lib/validators/validators';
import {
  CategoryConfig,
  FuelConfig,
  TypeConfig,
  UnitConfig,
} from '../models/emission.model';
import { Emission, EmissionSecondStepControls } from '../models/emission';

export class EmissionSecondStepGroup extends FormGroup<EmissionSecondStepControls> {
  constructor() {
    super({
      type: new FormControl<TypeConfig | null>(null, [Validators.required]),
      category: new FormControl<CategoryConfig | null>(null, [
        Validators.required,
      ]),
      fuel: new FormControl<FuelConfig | null>(null, [Validators.required]),
      amount: new FormControl<number | null>(0, [
        Validators.required,
        NonNegativeNumberValidator(),
      ]),
      unit: new FormControl<UnitConfig | null>(null, [Validators.required]),
    });
  }

  public get emissionSecondStepValues(): Emission {
    return {
      amount: this.controls.amount.value,
      type: this.controls.type.value,
      category: this.controls.category.value,
      fuel: this.controls.fuel.value,
      unit: this.controls.unit.value,
    };
  }
}
