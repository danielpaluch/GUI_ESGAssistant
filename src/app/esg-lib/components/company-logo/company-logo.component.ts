import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { CompanySelector } from '../../../company/selectors/company.selector';

@Component({
  selector: 'app-company-logo',
  standalone: true,
  imports: [NgOptimizedImage, AsyncPipe, MatProgressSpinner],
  templateUrl: './company-logo.component.html',
  styleUrl: './company-logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyLogoComponent {
  private store: Store = inject(Store);

  get loading$(): Observable<boolean> {
    return this.store.select(CompanySelector.getCompanyLoading);
  }

  get companyLogo$(): Observable<string | undefined | null> {
    return this.store.select(CompanySelector.getCompanyLogo);
  }
}
