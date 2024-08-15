import { Selector } from '@ngxs/store';
import { Company, CompanyStateModel } from '../models/company.model';
import { CompanyState } from '../state/company.state';

export class CompanySelector {
  @Selector([CompanyState])
  static getState(state: CompanyStateModel): CompanyStateModel {
    return state;
  }

  @Selector([CompanyState])
  static getCompanies(state: CompanyStateModel): Company[] | null {
    return state.entities;
  }

  @Selector([CompanyState])
  static getFirstCompany(state: CompanyStateModel): Company | null {
    return state.entities && state.entities.length > 0
      ? state.entities[0]
      : null;
  }

  @Selector([CompanyState])
  static getCompanyLogo(state: CompanyStateModel): string | null {
    const firstCompany =
      state.entities && state.entities.length > 0 ? state.entities[0] : null;
    return firstCompany ? firstCompany.logo : null;
  }

  @Selector([CompanyState])
  static getCompanyLoading(state: CompanyStateModel): boolean {
    return state.loading;
  }
}
