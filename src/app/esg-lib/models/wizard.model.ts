import {TemplateRef} from "@angular/core";
import { FormGroup} from "@angular/forms";
import {EmissionFirstStepGroup} from "../../emission-factor/forms/emission-first-step.form";
import {EmissionThirdStepGroup} from "../../emission-factor/forms/emission-third-step.form";

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
