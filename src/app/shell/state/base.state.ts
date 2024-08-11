import { StateContext } from '@ngxs/store';
import { catchError, of, tap } from 'rxjs';
import { BaseService } from '../services/base.service';
import { HttpErrorResponse } from '@angular/common/http';

export interface BaseStateModel<T> {
  data: T[];
  loading: boolean;
  error: HttpErrorResponse | null;
}

export abstract class BaseState<T extends { id: string }> {
  protected abstract httpService: BaseService<T>;

  protected handleError(
    ctx: StateContext<BaseStateModel<T>>,
    error: HttpErrorResponse,
  ) {
    ctx.patchState({
      loading: false,
      error,
    });
    return of(null);
  }

  protected getAll(ctx: StateContext<BaseStateModel<T>>) {
    ctx.patchState({ loading: true, error: null });

    return this.httpService.getAll().pipe(
      tap((data: T[]) => {
        ctx.patchState({
          data,
          loading: false,
          error: null,
        });
      }),
      catchError((error) => this.handleError(ctx, error)),
    );
  }

  // protected update(ctx: StateContext<BaseStateModel<T>>, id: string, item: T) {
  //   ctx.patchState({ loading: true, error: null });
  //
  //   return this.httpService.update(id, item).pipe(
  //     tap((updatedItem: T) => {
  //       const currentState = ctx.getState();
  //       const updatedData = currentState.data?.map(data =>
  //         data && (data as any).id === id ? updatedItem : data
  //       ) || [updatedItem];
  //
  //       ctx.patchState({
  //         data: updatedData,
  //         loading: false,
  //         error: null,
  //       });
  //     }),
  //     catchError((error) => this.handleError(ctx, error))
  //   );
  // }
}
