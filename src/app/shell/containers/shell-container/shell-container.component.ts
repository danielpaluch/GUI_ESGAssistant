import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CompanyState } from '../../../company/state/company.state';

@Component({
  selector: 'app-shell-container',
  templateUrl: './shell-container.component.html',
  styleUrl: './shell-container.component.scss',
})
export class ShellContainerComponent {
  constructor(private readonly store: Store) {}

  get loadingCompany(): Observable<boolean> {
    return this.store.select(CompanyState.getCompanyLoading);
  }
}
