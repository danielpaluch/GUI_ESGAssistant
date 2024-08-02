import {TemplateRef} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {
  EmissionFirstStepGroup, EmissionSecondStepGroup, EmissionThirdStepGroup
} from "../../emission-factor/components/add-emission-factor/add-emission-factor.component";

export interface StepperModel<T extends FormGroup>{
  label: string;
  template: TemplateRef<any>
  formGroup: T
}


export interface EmissionStepper {
  description: IStepper<EmissionFirstStepGroup>
  formula: IStepper<EmissionThirdStepGroup>
  summary: IStepper<EmissionThirdStepGroup>
}

export interface IStepper<T>{
  label: string,
  template: TemplateRef<unknown>,
  formGroup: T
}
