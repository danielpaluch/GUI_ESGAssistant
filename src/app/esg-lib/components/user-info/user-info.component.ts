import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '@auth0/auth0-angular';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { Store } from '@ngxs/store';
import { CompanyState } from '../../../company/state/company.state';
import { Observable } from 'rxjs';
import { Company } from '../../../company/models/company.model';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatProgressSpinner],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent {
  authUser = inject(AuthService);

  store = inject(Store);

  get company$(): Observable<Company | null> {
    return this.store.select(CompanyState.getFirstCompany);
  }
  get user$() {
    return this.authUser.user$;
  }
}
