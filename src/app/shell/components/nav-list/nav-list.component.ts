import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { NavigationConfig } from '../../containers/template/template.component';

@Component({
  selector: 'app-nav-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, NavItemComponent],
  templateUrl: './nav-list.component.html',
  styleUrl: './nav-list.component.scss',
})
export class NavListComponent {
  @Input() navigationConfig: NavigationConfig[];
}
