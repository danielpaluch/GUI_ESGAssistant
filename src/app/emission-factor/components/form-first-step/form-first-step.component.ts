import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {TextFormFieldComponent} from "../../../esg-lib/components/text-form-field/text-form-field.component";
import {EmissionFirstStepGroup} from "../../forms/emission-first-step.form";
import {AsyncPipe} from "@angular/common";
import {LabelFieldComponent} from "../../../esg-lib/components/label-field/label-field.component";
import {SelectFormFieldComponent} from "../../../esg-lib/components/select-form-field/select-form-field.component";

@Component({
  selector: 'app-form-first-step',
  standalone: true,
  imports: [
    TextFormFieldComponent,
    MatFormFieldModule,
    AsyncPipe,
    LabelFieldComponent,
    SelectFormFieldComponent
  ],
  templateUrl: './form-first-step.component.html',
  styleUrl: './form-first-step.component.scss'
})
export class FormFirstStepComponent {

  @Input() form: EmissionFirstStepGroup;

  public get aliasControl(): FormControl<string | null>{
    return this.form.controls.alias;
  }

  public get descriptionControl(): FormControl<string | null>{
    return this.form.controls.description;
  }
}
