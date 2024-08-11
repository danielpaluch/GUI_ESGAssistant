export interface PaginatedData<T> extends Paged {
  data: T[];
}

export interface Paged {
  page: number;
  pageSize: number;
}
