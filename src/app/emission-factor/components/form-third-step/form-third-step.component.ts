import { Component, Input } from '@angular/core';
import { EmissionFormTableComponent } from '../emission-form-table/emission-form-table.component';
import { EmissionThirdStepGroup } from '../../forms/emission-third-step.form';

@Component({
  selector: 'app-form-third-step',
  standalone: true,
  imports: [EmissionFormTableComponent],
  templateUrl: './form-third-step.component.html',
  styleUrl: './form-third-step.component.scss',
})
export class FormThirdStepComponent {
  @Input({ required: true }) thirdStepForm: EmissionThirdStepGroup;
}
