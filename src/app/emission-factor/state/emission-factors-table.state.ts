import { Action, State, StateContext } from '@ngxs/store';
import {
  EmissionFactorTableActionCreate,
  EmissionFactorTableActionCreateFailure,
  EmissionFactorTableActionCreateSuccess,
  EmissionFactorTableActionDelete,
  EmissionFactorTableActionDeleteFailure,
  EmissionFactorTableActionDeleteSuccess,
  EmissionFactorTableActionGetAll,
  EmissionFactorTableActionGetAllFailure,
  EmissionFactorTableActionGetAllSuccess,
  EmissionFactorTableActionUpdate,
  EmissionFactorTableActionUpdateFailure,
  EmissionFactorTableActionUpdateSuccess,
} from '../actions/emission-table.action';
import { catchError, of, tap } from 'rxjs';
import { EmissionFactorService } from '../services/emission-table.service';
import { inject } from '@angular/core';
import { PaginatedData } from '../../shell/models/paginated-service.model';
import {
  EmissionFactor,
  EmissionFactorPaginatedStateModel,
} from '../models/emission';

@State<EmissionFactorPaginatedStateModel>({
  name: 'EMISSION_FACTOR',
  defaults: {
    entities: [],
    selectedEntity: null,
    currentPage: 1,
    pageSize: 10,
    totalItems: 0,
    loading: false,
    error: null,
  },
})
export class EmissionFactorTableState {
  httpService: EmissionFactorService = inject(EmissionFactorService);

  @Action(EmissionFactorTableActionGetAll)
  getAll(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: EmissionFactorTableActionGetAll,
  ) {
    ctx.patchState({ loading: true, error: null });
    const { page, pageSize } = payload;

    return this.httpService.getAllPaginated(page, pageSize).pipe(
      tap((pagedData: PaginatedData<EmissionFactor>) =>
        ctx.dispatch(new EmissionFactorTableActionGetAllSuccess(pagedData)),
      ),
      catchError((error) =>
        ctx.dispatch(new EmissionFactorTableActionGetAllFailure(error)),
      ),
    );
  }

  @Action(EmissionFactorTableActionGetAllSuccess)
  getAllSuccess(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: EmissionFactorTableActionGetAllSuccess,
  ) {
    const { data, page, pageSize } = payload;
    ctx.patchState({
      entities: data,
      pageSize,
      currentPage: page,
      loading: false,
      error: null,
    });
  }

  @Action(EmissionFactorTableActionGetAllFailure)
  getAllFailure(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: EmissionFactorTableActionGetAllFailure,
  ) {
    const { error } = payload;
    ctx.patchState({
      loading: false,
      error: null,
    });
    return of(null);
  }

  @Action(EmissionFactorTableActionCreate)
  create(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: EmissionFactorTableActionCreate,
  ) {
    ctx.patchState({ loading: true, error: null });

    return this.httpService.create(payload).pipe(
      tap((data: EmissionFactor) =>
        ctx.dispatch(new EmissionFactorTableActionCreateSuccess(data)),
      ),
      catchError((error) =>
        ctx.dispatch(new EmissionFactorTableActionCreateFailure(error)),
      ),
    );
  }

  @Action(EmissionFactorTableActionCreateSuccess)
  createSuccess(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: EmissionFactorTableActionCreateSuccess,
  ) {
    const state = ctx.getState();
    const updatedData = payload ? [...state.entities, payload] : state.entities;

    return ctx.patchState({
      loading: false,
      error: null,
      entities: updatedData,
    });
  }

  @Action(EmissionFactorTableActionCreateFailure)
  createFailure(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: EmissionFactorTableActionCreateFailure,
  ) {
    ctx.patchState({
      loading: false,
      error: null,
    });
    return of(null);
  }

  @Action(EmissionFactorTableActionDelete)
  delete(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: EmissionFactorTableActionDelete,
  ) {
    const { id } = payload;
    ctx.patchState({ loading: true, error: null });

    return this.httpService.delete(id).pipe(
      tap(() =>
        ctx.dispatch(new EmissionFactorTableActionDeleteSuccess({ id })),
      ),
      catchError((error) =>
        ctx.dispatch(new EmissionFactorTableActionDeleteFailure(error)),
      ),
    );
  }

  @Action(EmissionFactorTableActionDeleteSuccess)
  deleteSuccess(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: EmissionFactorTableActionDeleteSuccess,
  ) {
    const { id } = payload;
    const state = ctx.getState();
    const updatedEntities = state.entities.filter((entity) => entity.id !== id);
    return ctx.patchState({
      loading: false,
      error: null,
      entities: updatedEntities,
    });
  }

  @Action(EmissionFactorTableActionDeleteFailure)
  deleteFailure(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: EmissionFactorTableActionDeleteFailure,
  ) {
    ctx.patchState({
      loading: false,
      error: null,
    });
    return of(null);
  }

  @Action(EmissionFactorTableActionUpdate)
  update(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: EmissionFactorTableActionUpdate,
  ) {
    const { id, item } = payload;
    ctx.patchState({ loading: true, error: null });

    return this.httpService.update(id, item).pipe(
      tap((data) =>
        ctx.dispatch(new EmissionFactorTableActionUpdateSuccess(data)),
      ),
      catchError((error) =>
        ctx.dispatch(new EmissionFactorTableActionUpdateFailure(error)),
      ),
    );
  }

  @Action(EmissionFactorTableActionUpdateSuccess)
  updateSuccess(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: EmissionFactorTableActionUpdateSuccess,
  ) {
    ctx.patchState({
      entities: [...ctx.getState().entities, payload],
      selectedEntity: payload,
      loading: false,
      error: null,
    });
  }

  @Action(EmissionFactorTableActionUpdateFailure)
  updateFailure(
    ctx: StateContext<EmissionFactorPaginatedStateModel>,
    { payload }: EmissionFactorTableActionUpdateFailure,
  ) {
    ctx.patchState({
      loading: false,
      error: null,
    });
    return of(null);
  }
}
