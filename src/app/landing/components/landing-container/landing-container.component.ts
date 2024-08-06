import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  styleUrl: './landing-container.component.scss',
})
export class LandingContainerComponent {
  companyControl: FormControl<string | null> = new FormControl<string | null>(
    null,
    [Validators.required],
  );

  addCompany(){}

}
