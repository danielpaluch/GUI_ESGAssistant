import { Component } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent {
  step = 1;

  constructor() { }

  ngOnInit(): void {
  }

  nextStep(): void {
    if (this.step < 4) {
      this.step++;
    }
  }

  previousStep(): void {
    if (this.step > 1) {
      this.step--;
    }
  }
}
