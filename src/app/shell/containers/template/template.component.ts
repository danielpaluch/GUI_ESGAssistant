import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
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
