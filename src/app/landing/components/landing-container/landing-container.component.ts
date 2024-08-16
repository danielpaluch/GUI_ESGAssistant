import { Component, DestroyRef, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Actions, ofActionDispatched, Store } from '@ngxs/store';
import { CompanyCreateData } from '../../../company/models/company.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ShellRoutes } from '../../../shell/routes/shell.routes';
import { tap } from 'rxjs';
import { CompanySelector } from '../../../company/selectors/company.selector';
import {
  CompanyActionCreate,
  CompanyActionCreateSuccess,
} from '../../../company/actions/company.action';

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

  store: Store = inject(Store);
  actions: Actions = inject(Actions);
  destroyRef: DestroyRef = inject(DestroyRef);
  router: Router = inject(Router);

  get loading() {
    return this.store.select(CompanySelector.getCompanyLoading);
  }

  addCompany() {
    const companyName: string | null = this.companyControl.value;
    if (companyName) {
      const companyCreateData: CompanyCreateData = {
        name: companyName,
      };
      this.store.dispatch(new CompanyActionCreate(companyCreateData));
      this.actions
        .pipe(
          ofActionDispatched(CompanyActionCreateSuccess),
          tap(() => {
            this.router.navigate(ShellRoutes.getCompanyRoute()).then();
          }),

          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe();
    }
  }
}
