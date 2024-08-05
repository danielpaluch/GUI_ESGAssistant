import {FormArray, FormGroup, Validators} from "@angular/forms";
import {EmissionSecondStepGroup} from "./emission-second-step.form";
import {EmissionFormModel} from "../models/emission-form.model";

export interface EmissionThirdStepControls {
  emissions: FormArray<EmissionSecondStepGroup>;
}

export class EmissionThirdStepGroup extends FormGroup<EmissionThirdStepControls>{

  constructor() {
    super({
      emissions: new FormArray<EmissionSecondStepGroup>([],[Validators.minLength(1),Validators.required])
    });
  }

  public addNewEmission(emission: Partial<EmissionFormModel>){
    const emissionSecondStepFrom = new EmissionSecondStepGroup()
    emissionSecondStepFrom.patchValue(emission)
    this.controls.emissions.push(emissionSecondStepFrom)
  }

  public removeEmissionByIndex(index: number){
    this.controls.emissions.removeAt(index)
  }

  public getEmissionOnIndex(index: number) {
    return this.controls.emissions.at(index)
  }
}
