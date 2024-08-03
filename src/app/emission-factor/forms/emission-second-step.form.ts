import {FormControl, FormGroup, Validators} from "@angular/forms";

import {NonNegativeNumberValidator} from "../../esg-lib/validators/validators";
import {CategoryConfig, FuelConfig, TypeConfig, UnitConfig} from "../models/emission.model";

export interface EmissionSecondStepControls {
  type: FormControl<TypeConfig|null>;
  category: FormControl<CategoryConfig|null>;
  fuel: FormControl<FuelConfig|null>;
  amount: FormControl<number|null>;
  unit: FormControl<UnitConfig|null>;
}

export class EmissionSecondStepGroup extends FormGroup<EmissionSecondStepControls>{

  constructor() {
    super({
      type: new FormControl<TypeConfig|null>(null,[Validators.required]),
      category: new FormControl<CategoryConfig|null>(null,[Validators.required]),
      fuel: new FormControl<FuelConfig|null>(null,[Validators.required]),
      amount: new FormControl<number|null>(0,[Validators.required,NonNegativeNumberValidator()]),
      unit: new FormControl<UnitConfig|null>(null,[Validators.required])
    });
  }
}
