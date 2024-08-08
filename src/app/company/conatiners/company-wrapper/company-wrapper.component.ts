import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { HeaderComponent } from '../../../esg-lib/components/header/header.component';
import { NavComponent } from '../../../esg-lib/components/nav/nav.component';
import { Router, RouterOutlet } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Component({
  selector: 'app-company-wrapper',
  standalone: true,
  imports: [AsyncPipe, HeaderComponent, NavComponent, RouterOutlet],
  templateUrl: './company-wrapper.component.html',
  styleUrl: './company-wrapper.component.scss',
})
export class CompanyWrapperComponent {
  navigationConfig$ = new BehaviorSubject<NavigationConfig[]>(navigationConfig);

  constructor(private router: Router) {}
  get title$(): Observable<string> {
    return this.navigationConfig$.asObservable().pipe(
      map((navigateConfigs: NavigationConfig[]) => {
        const matchedConfig = navigateConfigs.find(
          (navigateConfig: NavigationConfig) =>
            this.router.url.includes(navigateConfig.route),
        );

        return matchedConfig ? matchedConfig.title : 'Default title';
      }),
    );
  }
}

export const navigationConfig: NavigationConfig[] = [
  {
    route: 'overview',
    icon: 'home',
    title: 'Overview',
  },
  {
    route: 'esg',
    icon: 'folder',
    title: 'ESG',
  },
  {
    route: 'reports',
    icon: 'list_alt',
    title: 'Reports',
  },
  {
    route: 'management',
    icon: 'supervisor_account',
    title: 'Management',
  },
  {
    route: 'profile',
    icon: 'account_circle',
    title: 'Business Profile',
  },
  {
    route: 'settings',
    icon: 'settings',
    title: 'Settings',
  },
  {
    route: 'analyse',
    icon: 'assessment',
    title: 'Analyse',
  },
];

export interface NavigationConfig {
  route: string;
  icon: string;
  title: string;
}
