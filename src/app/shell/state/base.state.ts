import { StateContext } from '@ngxs/store';
import { catchError, Observable, of, tap } from 'rxjs';
import { BaseService } from '../services/base.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BaseStateModel } from '../models/base-service.model';

export abstract class BaseState<T extends { id: string }> {
  protected abstract httpService: BaseService<T>;

  protected handleError(
    ctx: StateContext<BaseStateModel<T>>,
    error: HttpErrorResponse,
  ): Observable<null> {
    ctx.patchState({
      loading: false,
      error,
    });
    return of(null);
  }

  protected handleSuccess(
    ctx: StateContext<BaseStateModel<T>>,
    data: T[],
  ): void {
    ctx.patchState({
      entities: data,
      loading: false,
      error: null,
    });
  }

  protected getAll(ctx: StateContext<BaseStateModel<T>>) {
    ctx.patchState({ loading: true, error: null });
    return this.httpService.getAll().pipe(
      tap((entities: T[]) => this.handleSuccess(ctx, entities)),
      catchError((error) => {
        return this.handleError(ctx, error);
      }),
    );
  }

  protected getEntity(
    ctx: StateContext<BaseStateModel<T>>,
    payload: { id: string },
  ) {
    const { id } = payload;
    ctx.patchState({ loading: true, error: null });
    return this.httpService.read(id).pipe(
      tap((entity) =>
        ctx.patchState({ selectedEntity: entity, loading: false }),
      ),
      catchError((error) => {
        ctx.patchState({ error: error.message, loading: false });
        return of(null);
      }),
    );
  }

  protected createEntity(
    ctx: StateContext<BaseStateModel<T>>,
    payload: { data: T },
  ) {
    const { data } = payload;

    ctx.patchState({ loading: true, error: null });
    return this.httpService.create(data).pipe(
      tap((entity) => {
        if (entity) {
          ctx.patchState({
            entities: [...ctx.getState().entities, entity],
            selectedEntity: entity,
            loading: false,
          });
        }
      }),
      catchError((error) => {
        ctx.patchState({ error: error.message, loading: false });
        return of(null);
      }),
    );
  }

  protected updateEntity(
    ctx: StateContext<BaseStateModel<T>>,
    payload: { id: string; data: Partial<T> },
  ) {
    const { data, id } = payload;

    ctx.patchState({ loading: true, error: null });
    return this.httpService.update(id, data).pipe(
      tap((entity: T | null) => {
        if (entity) {
          const state = ctx.getState();

          const updatedEntities = state.entities.map((existingEntity: T) => {
            if (existingEntity.id === id) {
              return { ...existingEntity, ...data };
            }
            return existingEntity;
          });
          ctx.patchState({ entities: updatedEntities, loading: false });
        }
      }),
      catchError((error) => {
        ctx.patchState({ error: error.message, loading: false });
        return of(null);
      }),
    );
  }

  deleteEntity(
    ctx: StateContext<BaseStateModel<T>>,
    payload: { id: string },
  ): Observable<void | null> {
    const { id } = payload;
    ctx.patchState({ loading: true, error: null });
    return this.httpService.delete(id).pipe(
      tap(() => {
        const state = ctx.getState();
        const updatedEntities = state.entities.filter(
          (entity: T) => entity.id !== id,
        );
        ctx.patchState({ entities: updatedEntities, loading: false });
      }),
      catchError((error) => {
        ctx.patchState({ error: error.message, loading: false });
        return of(null);
      }),
    );
  }
}
