import { BaseStateModel } from './base.state';
import { StateContext } from '@ngxs/store';
import { PaginatedBaseService } from '../services/paginated.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Paged, PaginatedData } from '../models/paginated-service.model';
import { catchError, of, tap } from 'rxjs';

export interface PaginatedBaseStateModel<T> extends BaseStateModel<T> {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}

export abstract class PaginatedBaseState<T> {
  protected abstract httpService: PaginatedBaseService<T>;

  handleSuccess(
    ctx: StateContext<PaginatedBaseStateModel<T>>,
    paginatedData: PaginatedData<T>,
  ) {
    const { data, page, pageSize } = paginatedData;
    ctx.patchState({
      entities: data,
      pageSize,
      currentPage: page,
      loading: false,
      error: null,
    });
  }

  handleCRUDSuccess(ctx: StateContext<PaginatedBaseStateModel<T>>) {
    this.getAllPaginated(ctx, {
      page: ctx.getState().currentPage,
      pageSize: ctx.getState().pageSize,
    });
  }

  protected handleError(
    ctx: StateContext<PaginatedBaseStateModel<T>>,
    error: HttpErrorResponse,
  ) {
    console.log('ERROR');
    ctx.patchState({
      loading: false,
      error: error,
    });
    return of(null);
  }

  protected getAllPaginated(
    ctx: StateContext<PaginatedBaseStateModel<T>>,
    pageChanged: Paged,
  ) {
    ctx.patchState({ loading: true, error: null });
    const { page, pageSize } = pageChanged;
    return this.httpService.getAllPaginated(page, pageSize).pipe(
      tap((pagedData) => this.handleSuccess(ctx, pagedData)),
      catchError((error) => this.handleError(ctx, error)),
    );
  }

  protected getEntity(
    ctx: StateContext<PaginatedBaseStateModel<T>>,
    payload: { id: string },
  ) {
    const { id } = payload;
    ctx.patchState({ loading: true, error: null });
    return this.httpService.read(id).pipe(
      tap((entity) =>
        ctx.patchState({ selectedEntity: entity, loading: false }),
      ),
      catchError((error) => this.handleError(ctx, error)),
    );
  }

  protected createEntity(
    ctx: StateContext<PaginatedBaseStateModel<T>>,
    data: T,
  ) {
    ctx.patchState({ loading: true, error: null });
    return this.httpService.create(data).pipe(
      // tap(() => this.handleCRUDSuccess(ctx)),
      tap((data: T | null) => {
        const state = ctx.getState();
        const updatedData = data ? [...state.entities, data] : state.entities;

        return ctx.patchState({
          loading: false,
          error: null,
          entities: updatedData,
        });
      }),
      catchError((error) => this.handleError(ctx, error)),
    );
  }

  protected deleteEntity(
    ctx: StateContext<PaginatedBaseStateModel<T>>,
    payload: { id: string },
  ) {
    const { id } = payload;

    return this.httpService.delete(id).pipe(
      tap(() => this.handleCRUDSuccess(ctx)),
      catchError((error) => this.handleError(ctx, error)),
    );
  }

  protected updateEntity(
    ctx: StateContext<PaginatedBaseStateModel<T>>,
    payload: { id: string; data: Partial<T> },
  ) {
    const { id, data } = payload;
    return this.httpService.update(id, data).pipe(
      tap(() => this.handleCRUDSuccess(ctx)),
      catchError((error) => this.handleError(ctx, error)),
    );
  }
}
