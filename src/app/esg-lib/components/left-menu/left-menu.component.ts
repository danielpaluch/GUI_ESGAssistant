import { Component } from '@angular/core';
import { NavItemComponent } from '../../../shell/components/nav-item/nav-item.component';
import { NavListComponent } from '../../../shell/components/nav-list/nav-list.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [NavItemComponent, NavListComponent, NgOptimizedImage],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss',
})
export class LeftMenuComponent {}
