import { Observable } from 'rxjs';
import { PreCrudService } from './pre-service.model';
import { HttpErrorResponse } from '@angular/common/http';

export interface BaseCrudService<T> extends PreCrudService<T> {
  getAll(): Observable<T[]>;
}

export interface BaseStateModel<T> {
  entities: T[];
  selectedEntity: T | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}
