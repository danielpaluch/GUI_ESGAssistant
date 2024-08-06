import { ShellRoutes } from '../../shell/routes/shell.routes';
import { CompanyRoutesEnum } from '../const/company-routes.const';

export class CompanyRoutes {
  static getOverviewRoute(): string[] {
    return [...ShellRoutes.getCompanyRoute(), '/', CompanyRoutesEnum.OVERVIEW];
  }

  static getEsgRoute(): string[] {
    return [...ShellRoutes.getCompanyRoute(), '/', CompanyRoutesEnum.ESG];
  }

  static getReportsRoute(): string[] {
    return [...ShellRoutes.getCompanyRoute(), '/', CompanyRoutesEnum.REPORTS];
  }

  static getManagementRoute(): string[] {
    return [
      ...ShellRoutes.getCompanyRoute(),
      '/',
      CompanyRoutesEnum.MANAGEMENT,
    ];
  }

  static getSettingsRoute(): string[] {
    return [...ShellRoutes.getCompanyRoute(), '/', CompanyRoutesEnum.SETTINGS];
  }

  static getAnalyseRoute(): string[] {
    return [...ShellRoutes.getCompanyRoute(), '/', CompanyRoutesEnum.ANALYSE];
  }
}
