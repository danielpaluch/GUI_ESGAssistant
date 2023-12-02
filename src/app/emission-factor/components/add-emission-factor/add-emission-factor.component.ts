import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {WizardComponent} from "../../../esg-lib/components/wizard/wizard.component";
import {StepModel} from "../../../esg-lib/models/wizard.model";
import {MatInputModule} from "@angular/material/input";
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-emission-factor',
  standalone: true,
  imports: [
    WizardComponent,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './add-emission-factor.component.html',
  styleUrl: './add-emission-factor.component.scss'
})
export class AddEmissionFactorComponent implements AfterViewInit{
  @ViewChild('firstStep')
  firstStepTemplate!: TemplateRef<any>

  @ViewChild('secondStep')
  secondStepTemplate!: TemplateRef<any>

  @ViewChild('thirdStep')
  thirdStepTemplate!: TemplateRef<any>

  stepConfig!:StepModel[]

  constructor(
    public dialogRef: MatDialogRef<AddEmissionFactorComponent>,
  ) {
  }

  firstStepForm = new FormGroup({
    firstControl :new FormControl( [Validators.required]),
    secondControl :new FormControl( [Validators.required]),
    ThirdControl :new FormControl( [Validators.required])
  })

  secondStepForm = new FormGroup({
    firstControl :new FormControl( [Validators.required]),
    secondControl :new FormControl( [Validators.required]),
    ThirdControl :new FormControl( [Validators.required])
  })

  thirdStepForm = new FormGroup({
    firstControl :new FormControl( [Validators.required]),
    secondControl :new FormControl( [Validators.required]),
    ThirdControl :new FormControl( [Validators.required])
  })

  ngAfterViewInit(){
    this.stepConfig= [
      {
        isValid: true,
        stepIndex: 1,
        template: this.firstStepTemplate
      },
      {
        isValid: true,
        stepIndex: 2,
        template: this.secondStepTemplate
      },
      {
        isValid: false,
        stepIndex: 3,
        template: this.thirdStepTemplate
      }
    ]

  }

  onSave(){
    this.dialogRef.close()
  }



}
