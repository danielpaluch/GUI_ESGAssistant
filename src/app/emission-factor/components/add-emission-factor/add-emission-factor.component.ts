import {AfterViewInit, Component, TemplateRef, ViewChild} from '@angular/core';
import {EmissionStepper, StepperModel} from "../../../esg-lib/models/wizard.model";
import {MatInputModule} from "@angular/material/input";
import {MatDialogRef} from "@angular/material/dialog";
import {FormArray, FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {FormFirstStepComponent} from "../form-first-step/form-first-step.component";
import {TextFormFieldComponent} from "../../../esg-lib/components/text-form-field/text-form-field.component";
import { NonNegativeNumberValidator } from 'src/app/esg-lib/validators/validators';
import {
  CategoryConfig,
  FormSecondStepComponent,
  FuelConfig,
  TypeConfig, UnitConfig
} from "../form-second-step/form-second-step.component";
import {EmissionWizardComponent} from "../emission-wizard/emission-wizard.component";
import {EmissionFactor, EmissionFormModel} from "../../models/emission-form.model";
import {FormThirdStepComponent} from "../form-third-step/form-third-step.component";

@Component({
  selector: 'app-add-emission-factor',
  standalone: true,
  imports: [
    EmissionWizardComponent,
    MatInputModule,
    FormsModule,
    TextFormFieldComponent,
    FormFirstStepComponent,
    FormSecondStepComponent,
    FormThirdStepComponent
  ],
  templateUrl: './add-emission-factor.component.html',
  styleUrl: './add-emission-factor.component.scss'
})
export class AddEmissionFactorComponent implements AfterViewInit{
  @ViewChild('firstStep')
  firstStepTemplate: TemplateRef<HTMLElement>;

  @ViewChild('secondStep')
  secondStepTemplate: TemplateRef<HTMLElement>;

  @ViewChild('thirdStep')
  thirdStepTemplate: TemplateRef<HTMLElement>;

  steps:EmissionStepper;

  firstStepForm= new EmissionFirstStepGroup();

  secondStepForm = new EmissionSecondStepGroup();

  thirdStepForm = new EmissionThirdStepGroup()

  constructor(
    public dialogRef: MatDialogRef<AddEmissionFactorComponent>,
  ) {
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.steps ={
        description: {
          label: 'Fill description',
          template: this.firstStepTemplate,
          formGroup: this.firstStepForm
        },
        formula:
          {
            label: 'Formula',
            template: this.secondStepTemplate,
            formGroup: this.thirdStepForm
          },
        summary:
          {
            label: 'Summary',
            template: this.thirdStepTemplate,
            formGroup: this.thirdStepForm
          }
      };
    })
  }

  onSave(){

    const {alias, description} = this.firstStepForm.value

    const emissionFactor: EmissionFactor = {
      alias: alias ?? '',
      description: description ?? '',
      emissions: this.thirdStepForm.value,
    }
    this.dialogRef.close(emissionFactor)
  }
}

export interface EmissionFirstStepControls {
  alias: FormControl<string|null>,
  description: FormControl<string|null>
}

export class EmissionFirstStepGroup extends FormGroup<EmissionFirstStepControls> {
  constructor() {
    super({
      alias: new FormControl<string|null>(null),
      description: new FormControl<string|null>(null,[Validators.required])
    });
  }
}

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

export interface EmissionThirdStepControls {
  emissions: FormArray<EmissionSecondStepGroup>;
}

export class EmissionThirdStepGroup extends FormGroup<EmissionThirdStepControls>{

  constructor() {
    super({
      emissions: new FormArray<EmissionSecondStepGroup>([])
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

