import { Observable, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export abstract class PreService<T> {
  abstract create(item: T): Observable<T | null>;

  abstract read(id: string): Observable<T | null>;

  abstract update(id: string, item: T): Observable<T | null>;

  abstract delete(id: string): Observable<void | null>;

  protected handleError(error: HttpErrorResponse | null): Observable<null> {
    console.error('An error occurred:', error);
    return of(null);
  }
}
