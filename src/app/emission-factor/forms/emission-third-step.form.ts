import { FormArray, FormGroup, Validators } from '@angular/forms';
import { Emission, EmissionThirdStepControls } from '../models/emission';
import { EmissionSecondStepGroup } from './emission-second-step.form';

export class EmissionThirdStepGroup extends FormGroup<EmissionThirdStepControls> {
  constructor() {
    super({
      emissions: new FormArray<EmissionSecondStepGroup>(
        [],
        [Validators.minLength(1), Validators.required],
      ),
    });
  }

  public addNewEmission(emission: Emission) {
    const emissionSecondStepFrom = new EmissionSecondStepGroup();
    emissionSecondStepFrom.setValue(emission);
    this.controls.emissions.push(emissionSecondStepFrom);
  }

  public removeEmissionByIndex(index: number) {
    this.controls.emissions.removeAt(index);
  }

  public getEmissionOnIndex(index: number) {
    return this.controls.emissions.at(index);
  }

  public get emissionsThirdStepValues(): Emission[] {
    return this.controls.emissions.controls.map(
      (emission: EmissionSecondStepGroup): Emission => {
        return {
          amount: emission.controls.amount.value,
          type: emission.controls.type.value,
          category: emission.controls.category.value,
          fuel: emission.controls.fuel.value,
          unit: emission.controls.unit.value,
        };
      },
    );
  }
}
