import { Observable } from 'rxjs';

export interface PreCrudService<T> {
  create(item: T): Observable<T | null>;
  read(id: string): Observable<T | null>;
  update(id: string, item: T): Observable<T | null>;
  delete(id: string): Observable<void | null>;
}
