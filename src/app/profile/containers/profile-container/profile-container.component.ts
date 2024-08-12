import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CompanyState } from '../../../company/state/company.state';
import { Company } from '../../../company/models/company.model';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrl: './profile-container.component.scss',
})
export class ProfileContainerComponent {
  public store: Store = inject(Store);

  get company$(): Observable<Company | null> {
    return this.store.select(CompanyState.getFirstCompany);
  }
}