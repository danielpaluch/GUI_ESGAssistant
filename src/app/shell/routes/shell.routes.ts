import { ShellRoutesEnum } from '../models/shell-routes.model';

export class ShellRoutes {
  static getBaseRoute(): string[] {
    return ['/'];
  }

  static getLandingRoute(): string[] {
    return [...ShellRoutes.getBaseRoute(), ShellRoutesEnum.LANDING];
  }

  static getCompanyRoute(): string[] {
    return [...ShellRoutes.getBaseRoute(), ShellRoutesEnum.COMPANY];
  }
}
