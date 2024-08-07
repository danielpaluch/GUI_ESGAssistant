import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { CompanyRoutesEnum } from '../../../company/const/company-routes.const';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
  navigationConfig: NavigationConfig[] = navigationConfig;

  constructor(private router: Router) {}

  get title$(): Observable<string> {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.getTitle()),
    );
  }

  private getTitle(): string {
    const routeConfig: NavigationConfig | undefined =
      this.navigationConfig.find((config: NavigationConfig) =>
        this.router.url.includes(config.route),
      );
    return routeConfig ? routeConfig.title : 'Unknown';
  }
}

export const navigationConfig: NavigationConfig[] = [
  {
    route: CompanyRoutesEnum.OVERVIEW,
    icon: 'home',
    title: 'Overview',
  },
  {
    route: CompanyRoutesEnum.ESG,
    icon: 'folder',
    title: 'ESG',
  },
  {
    route: CompanyRoutesEnum.REPORTS,
    icon: 'list_alt',
    title: 'Reports',
  },
  {
    route: CompanyRoutesEnum.MANAGEMENT,
    icon: 'supervisor_account',
    title: 'Management',
  },
  {
    route: CompanyRoutesEnum.MANAGEMENT,
    icon: 'settings',
    title: 'Settings',
  },
  {
    route: CompanyRoutesEnum.ANALYSE,
    icon: 'assessment',
    title: 'Analyse',
  },
];

export interface NavigationConfig {
  route: string;
  icon: string;
  title: string;
}
