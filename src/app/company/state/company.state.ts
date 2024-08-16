import { Action, State, StateContext } from '@ngxs/store';
import { inject } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company, CompanyStateModel } from '../models/company.model';
import { catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import {
  CompanyActionCreate,
  CompanyActionCreateFailure,
  CompanyActionCreateSuccess,
  CompanyActionGet,
  CompanyActionGetFailure,
  CompanyActionGetSuccess,
  CompanyActionUpdate,
  CompanyActionUpdateFailure,
  CompanyActionUpdateSuccess,
} from '../actions/company.action';

@State<CompanyStateModel>({
  name: 'COMPANY',
  defaults: {
    entities: [],
    selectedEntity: null,
    loading: false,
    error: null,
  },
})
export class CompanyState {
  httpService: CompanyService = inject(CompanyService);

  router: Router = inject(Router);

  @Action(CompanyActionGet)
  get(ctx: StateContext<CompanyStateModel>) {
    ctx.patchState({ loading: true, error: null });

    return this.httpService.getAll().pipe(
      tap((data: Company[]) =>
        ctx.dispatch(new CompanyActionGetSuccess(data[0])),
      ),
      catchError((error) => ctx.dispatch(new CompanyActionGetFailure(error))),
    );
  }

  @Action(CompanyActionGetSuccess)
  getSuccess(
    ctx: StateContext<CompanyStateModel>,
    { payload }: CompanyActionGetSuccess,
  ) {
    ctx.patchState({
      entities: [payload],
      selectedEntity: payload,
      loading: false,
      error: null,
    });
  }

  @Action(CompanyActionGetFailure)
  getFailure(
    ctx: StateContext<CompanyStateModel>,
    { payload }: CompanyActionGetFailure,
  ) {
    ctx.patchState({
      loading: false,
      error: null,
    });
    return of(null);
  }

  @Action(CompanyActionCreate)
  create(
    ctx: StateContext<CompanyStateModel>,
    { payload }: CompanyActionCreate,
  ) {
    ctx.patchState({ loading: true, error: null });
    return this.httpService.create(payload).pipe(
      tap((data: Company) =>
        ctx.dispatch(new CompanyActionCreateSuccess(data)),
      ),
      catchError((error) =>
        ctx.dispatch(new CompanyActionCreateFailure(error)),
      ),
    );
  }

  @Action(CompanyActionCreateSuccess)
  createSuccess(
    ctx: StateContext<CompanyStateModel>,
    { payload }: CompanyActionCreateSuccess,
  ) {
    ctx.patchState({
      entities: [...ctx.getState().entities, payload],
      selectedEntity: payload,
      loading: false,
      error: null,
    });
  }

  @Action(CompanyActionCreateFailure)
  createFailure(
    ctx: StateContext<CompanyStateModel>,
    { payload }: CompanyActionCreateFailure,
  ) {
    ctx.patchState({
      loading: false,
      error: null,
    });
    return of(null);
  }

  @Action(CompanyActionUpdate)
  update(
    ctx: StateContext<CompanyStateModel>,
    { payload }: CompanyActionUpdate,
  ) {
    const { id, item } = payload;

    ctx.patchState({ loading: true, error: null });
    return this.httpService.update(id, item).pipe(
      tap((data: Company) =>
        ctx.dispatch(new CompanyActionUpdateSuccess(data)),
      ),
      catchError((error) =>
        ctx.dispatch(new CompanyActionUpdateFailure(error)),
      ),
    );
  }

  @Action(CompanyActionUpdateSuccess)
  updateSuccess(
    ctx: StateContext<CompanyStateModel>,
    { payload }: CompanyActionUpdateSuccess,
  ) {
    ctx.patchState({
      entities: [...ctx.getState().entities, payload],
      selectedEntity: payload,
      loading: false,
      error: null,
    });
  }

  @Action(CompanyActionUpdateFailure)
  updateFailure(
    ctx: StateContext<CompanyStateModel>,
    { payload }: CompanyActionUpdateFailure,
  ) {
    ctx.patchState({
      loading: false,
      error: null,
    });
    return of(null);
  }
}
