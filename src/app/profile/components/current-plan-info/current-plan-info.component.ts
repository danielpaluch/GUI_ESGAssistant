import { Component, Input } from '@angular/core';
import { Company } from '../../../company/state/company.state';

@Component({
  selector: 'app-current-plan-info',
  templateUrl: './current-plan-info.component.html',
  styleUrl: './current-plan-info.component.scss',
})
export class CurrentPlanInfoComponent {
  @Input() company: Company;
}
