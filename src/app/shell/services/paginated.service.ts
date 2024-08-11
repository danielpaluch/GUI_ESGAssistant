import { Observable } from 'rxjs';
import { PreService } from './pre.service';
import { PaginatedData } from '../models/paginated-service.model';
import { PreCrudService } from '../models/pre-service.model';

export abstract class PaginatedBaseService<T>
  extends PreService<T>
  implements PaginatedCrudService<T>
{
  abstract getAllPaginated(
    page: number,
    size: number,
  ): Observable<PaginatedData<T>>;
}

export interface PaginatedCrudService<T> extends PreCrudService<T> {
  getAllPaginated(page: number, size: number): Observable<PaginatedData<T>>;
}
