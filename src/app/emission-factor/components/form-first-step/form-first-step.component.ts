import {Component, Input} from '@angular/core';
import {EmissionFirstStepGroup} from "../add-emission-factor/add-emission-factor.component";
import {FormControl} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {TextFormFieldComponent} from "../../../esg-lib/components/text-form-field/text-form-field.component";

@Component({
  selector: 'app-form-first-step',
  standalone: true,
  imports: [
    TextFormFieldComponent,
    MatFormFieldModule
  ],
  templateUrl: './form-first-step.component.html',
  styleUrl: './form-first-step.component.scss'
})
export class FormFirstStepComponent {

  @Input() form: EmissionFirstStepGroup;

  get aliasControl():FormControl<string | null>{
    return this.form.controls.alias
  }

  get descriptionControl():FormControl<string| null>{
    return this.form.controls.description
  }

}
