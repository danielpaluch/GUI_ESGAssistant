import { BaseStateModel } from './base.state';
import { StateContext } from '@ngxs/store';
import { of } from 'rxjs';
import { PaginatedBaseService } from '../services/paginated.service';
import { HttpErrorResponse } from '@angular/common/http';

export interface PaginatedBaseStateModel<T> extends BaseStateModel<T> {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}

export abstract class PaginatedBaseState<T> {
  protected abstract httpService: PaginatedBaseService<T>;

  protected handleError(
    ctx: StateContext<PaginatedBaseState<T>>,
    error: HttpErrorResponse | null,
  ) {
    ctx.patchState({
      loading: false,
      error,
    });
    return of(null);
  }
  //
  // protected getAllPaginated(ctx: StateContext<PaginatedBaseState<T>>,paged: Paged) {
  //   ctx.patchState({ loading: true, error: null });
  //   const {page,pageSize} = paged
  //   console.log('paginated')
  //   return this.httpService.getAllPaginated(page,pageSize).pipe(
  //     tap((paginatedData: PaginatedData<T>) => {
  //       ctx.patchState({
  //         data: paginatedData.data,
  //         currentPage: page,
  //         pageSize,
  //         loading: false,
  //         error: null,
  //       });
  //     }),
  //     catchError((error) => this.handleError(ctx, error))
  //   );
  // }
}
