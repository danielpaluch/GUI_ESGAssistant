import { Component } from '@angular/core';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { NavListComponent } from '../nav-list/nav-list.component';
import { NgOptimizedImage } from '@angular/common';
import { CompanyLogoComponent } from '../company-logo/company-logo.component';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [
    NavItemComponent,
    NavListComponent,
    NgOptimizedImage,
    CompanyLogoComponent,
  ],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss',
})
export class LeftMenuComponent {}
