import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NavListComponent } from '../nav-list/nav-list.component';
import { NgOptimizedImage } from '@angular/common';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { LeftMenuComponent } from '../../../esg-lib/components/left-menu/left-menu.component';
import { AuthService } from '@auth0/auth0-angular';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NavigationConfig } from '../../../company/conatiners/company-wrapper/company-wrapper.component';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    NavListComponent,
    NgOptimizedImage,
    NavItemComponent,
    LeftMenuComponent,
    MatButton,
    MatFabButton,
    MatProgressSpinner,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  @Input() navigationConfig: NavigationConfig[];

  authService: AuthService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
