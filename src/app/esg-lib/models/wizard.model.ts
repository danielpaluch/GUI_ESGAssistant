import {TemplateRef} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

export interface StepModel {
  label: string;
  stepIndex: number;
  isValid: Observable<boolean>;
  template: TemplateRef<any>
}


export interface StepperModel {
  label: string;
  template: TemplateRef<any>
  formGroup: FormGroup
}
