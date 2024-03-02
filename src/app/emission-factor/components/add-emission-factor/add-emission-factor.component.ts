import {AfterViewInit, Component, TemplateRef, ViewChild} from '@angular/core';
import {WizardComponent} from "../../../esg-lib/components/wizard/wizard.component";
import { StepperModel} from "../../../esg-lib/models/wizard.model";
import {MatInputModule} from "@angular/material/input";
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {FormFirstStepComponent} from "../form-first-step/form-first-step.component";
import {TextFormFieldComponent} from "../../../esg-lib/components/text-form-field/text-form-field.component";
import { NonNegativeNumberValidator } from 'src/app/esg-lib/validators/validators';
import {
  CategoryConfig,
  FormSecondStepComponent,
  FuelConfig,
  TypeConfig, UnitConfig
} from "../form-second-step/form-second-step.component";

@Component({
  selector: 'app-add-emission-factor',
  standalone: true,
  imports: [
    WizardComponent,
    MatInputModule,
    FormsModule,
    TextFormFieldComponent,
    FormFirstStepComponent,
    FormSecondStepComponent
  ],
  templateUrl: './add-emission-factor.component.html',
  styleUrl: './add-emission-factor.component.scss'
})
export class AddEmissionFactorComponent implements AfterViewInit{
  @ViewChild('firstStep')
  firstStepTemplate!: TemplateRef<HTMLElement>

  @ViewChild('secondStep')
  secondStepTemplate!: TemplateRef<HTMLElement>

  @ViewChild('thirdStep')
  thirdStepTemplate!: TemplateRef<HTMLElement>

  steps!:StepperModel[]

  firstStepForm= new EmissionFirstStepGroup()

  secondStepForm = new EmissionSecondStepGroup()

  constructor(
    public dialogRef: MatDialogRef<AddEmissionFactorComponent>,
  ) {
  }


  thirdStepForm = new FormGroup({
    firstControl :new FormControl( [Validators.required]),
    secondControl :new FormControl( [Validators.required]),
    ThirdControl :new FormControl( [Validators.required])
  })

  ngAfterViewInit(){
    setTimeout(() => {
      this.steps = [
        {
          label: 'Fill description',
          template: this.firstStepTemplate,
          formGroup: this.firstStepForm
        },
        {
          label: 'Formula',
          template: this.secondStepTemplate,
          formGroup: this.firstStepForm
        },
        {
          label: 'Summary',
          template: this.thirdStepTemplate,
          formGroup: this.firstStepForm
        }
      ];
    });
  }

  onSave(){
    this.dialogRef.close()
  }
}


export class EmissionFirstStepGroup extends FormGroup{

  constructor() {
    super({
      alias: new FormControl<string>(''),
      description: new FormControl('',[Validators.required])
    });
  }

  get alias() { return this.get('alias') as FormControl; }
  get description() { return this.get('description') as FormControl; }
}

export class EmissionSecondStepGroup extends FormGroup{

  constructor() {
    super({
      type: new FormControl<TypeConfig|undefined>(undefined,[Validators.required]),
      category: new FormControl<CategoryConfig|undefined>(undefined,[Validators.required]),
      fuel: new FormControl<FuelConfig|undefined>(undefined,[Validators.required]),
      amount: new FormControl<number>(0,[Validators.required,NonNegativeNumberValidator()]),
      unit: new FormControl<UnitConfig|undefined>(undefined,[Validators.required])
    });
  }

  get type() { return this.get('type') as FormControl<TypeConfig|undefined>; }
  get category() { return this.get('category') as FormControl<CategoryConfig|undefined>; }
  get fuel() { return this.get('fuel') as FormControl<FuelConfig|undefined>; }
  get amount() { return this.get('amount') as FormControl<number>; }
  get unit() { return this.get('unit') as FormControl<UnitConfig|undefined>; }
}



