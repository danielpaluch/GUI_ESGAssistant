import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {StepperModel} from "../../models/wizard.model";
import {AsyncPipe, JsonPipe, NgClass, NgTemplateOutlet} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatStepper, MatStepperModule} from "@angular/material/stepper";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    NgTemplateOutlet,
    NgClass,
    MatButtonModule,
    JsonPipe,
    MatStepperModule
  ],
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements AfterViewInit{


  @Input() steps!:StepperModel[];

  @Output() readonly submit = new EventEmitter<void>();

  @ViewChild('stepper') stepper!: MatStepper;


  constructor() { }


  onSubmit(): void {
      this.submit.emit()
  }

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

  get nextLabel(): string{
    return this.stepperIndex+1 === this.steps.length ? 'Save' : 'Next'
  }


}
