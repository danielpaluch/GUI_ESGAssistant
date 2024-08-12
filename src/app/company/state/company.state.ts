import { Action, Selector, State, StateContext } from '@ngxs/store';
import { BaseState } from '../../shell/state/base.state';
import { inject } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company, CompanyStateModel } from '../models/company.model';
import { CompanyActions } from '../actions/company.action';

@State<CompanyStateModel>({
  name: 'COMPANY',
  defaults: {
    entities: [],
    selectedEntity: null,
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
    return state.entities;
  }

  @Selector()
  static getFirstCompany(state: CompanyStateModel): Company | null {
    return state.entities && state.entities.length > 0
      ? state.entities[0]
      : null;
  }

  @Selector()
  static getCompanyLogo(state: CompanyStateModel): string | null {
    const firstCompany =
      state.entities && state.entities.length > 0 ? state.entities[0] : null;
    return firstCompany ? firstCompany.logo : null;
  }

  @Selector()
  static getCompanyLoading(state: CompanyStateModel): boolean {
    return state.loading;
  }

  @Action(CompanyActions.FetchCompany)
  fetchCompany(ctx: StateContext<CompanyStateModel>) {
    return this.getAll(ctx);
  }

  @Action(CompanyActions.UpdateCompany)
  updateCompany(
    ctx: StateContext<CompanyStateModel>,
    { payload }: CompanyActions.UpdateCompany,
  ) {
    return this.updateEntity(ctx, payload);
  }

  @Action(CompanyActions.DeleteCompany)
  deleteCompany(
    ctx: StateContext<CompanyStateModel>,
    { payload }: CompanyActions.DeleteCompany,
  ) {
    return this.deleteEntity(ctx, payload);
  }

  @Action(CompanyActions.CreateCompany)
  createCompany(
    ctx: StateContext<CompanyStateModel>,
    { payload }: CompanyActions.CreateCompany,
  ) {
    return this.createEntity(ctx, payload);
  }
}
