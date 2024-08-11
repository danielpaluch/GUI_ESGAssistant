import { Component, Input } from '@angular/core';
import { Company } from '../../../company/state/company.state';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrl: './company-info.component.scss',
})
export class CompanyInfoComponent {
  @Input() company: Company;
}
