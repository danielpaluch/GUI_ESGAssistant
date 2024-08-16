import { BaseStateModel } from './base-service.model';

export interface PaginatedData<T> extends Paged {
  data: T[];
}

export interface Paged {
  page: number;
  pageSize: number;
}

export interface PaginatedBaseStateModel<T> extends BaseStateModel<T> {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}
