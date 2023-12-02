import {TemplateRef} from "@angular/core";

export interface StepModel {
  stepIndex: number;
  isValid: boolean;
  template: TemplateRef<any>
}
