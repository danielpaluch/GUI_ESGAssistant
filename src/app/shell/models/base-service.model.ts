import { Observable } from 'rxjs';
import { PreCrudService } from './pre-service.model';

export interface BaseCrudService<T> extends PreCrudService<T> {
  getAll(): Observable<T[]>;
}
