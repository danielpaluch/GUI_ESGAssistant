import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '@auth0/auth0-angular';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatProgressSpinner],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent {
  authUser = inject(AuthService);

  get user$() {
    return this.authUser.user$;
  }
}
