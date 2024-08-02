import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {EmissionStepper, StepperModel} from "../../../esg-lib/models/wizard.model";
import {AsyncPipe, JsonPipe, NgClass, NgTemplateOutlet} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatStepper, MatStepperModule} from "@angular/material/stepper";

@Component({
  selector: 'app-emission-wizard',
  templateUrl: './emission-wizard.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    NgTemplateOutlet,
    NgClass,
    MatButtonModule,
    JsonPipe,
    MatStepperModule
  ],
  styleUrls: ['./emission-wizard.component.scss']
})
export class EmissionWizardComponent implements AfterViewInit{

  @Input() steps:EmissionStepper;

  @Output() readonly submit = new EventEmitter<void>();

  @ViewChild('stepper') stepper: MatStepper;

  ngAfterViewInit() {
    setTimeout(()=>{
      this.stepper.selectedIndex
    })
  }

  get stepperIndex(): number{
    if(this.stepper){
      return this.stepper.selectedIndex;
    }
    return 0;
  }

  get getStepKeys(): Array<keyof EmissionStepper> {
    return Object.keys(this.steps) as Array<keyof EmissionStepper>;
  }

  get last(): boolean {
    return this.stepperIndex + 1 ===  this.getStepKeys.length;
  }

  submitForm(){
    this.submit.emit()
  }
}
