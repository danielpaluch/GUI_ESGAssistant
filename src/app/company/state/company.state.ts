import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FetchCompany } from '../actions/company.action';
import { BaseState, BaseStateModel } from '../../shell/state/base.state';
import { inject } from '@angular/core';
import { CompanyService } from '../services/company.service';

export interface Company {
  id: string;
  name: string;
  activated: boolean;
  plan: string;
  startDate: Date;
  expireDate: Date;
  description: string;
  logo: null | string;
}

export interface CompanyStateModel extends BaseStateModel<Company> {}

@State<CompanyStateModel>({
  name: 'COMPANY',
  defaults: {
    data: [],
    loading: false,
    error: null,
  },
})
export class CompanyState extends BaseState<Company> {
  httpService: CompanyService = inject(CompanyService);

  @Selector()
  static getState(state: CompanyStateModel): CompanyStateModel {
    return state;
  }

  @Selector()
  static getCompanies(state: CompanyStateModel): Company[] | null {
    return state.data;
  }

  @Selector()
  static getFirstCompany(state: CompanyStateModel): Company | null {
    return state.data && state.data.length > 0 ? state.data[0] : null;
  }

  @Selector()
  static getCompanyLogo(state: CompanyStateModel): string | null {
    const firstCompany =
      state.data && state.data.length > 0 ? state.data[0] : null;
    return firstCompany ? firstCompany.logo : null;
  }

  @Selector()
  static getCompanyLoading(state: CompanyStateModel): boolean {
    return state.loading;
  }

  @Action(FetchCompany)
  fetchCompany(ctx: StateContext<CompanyStateModel>) {
    return this.getAll(ctx);
  }
}
