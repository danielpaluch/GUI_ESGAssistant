import { Injectable } from '@angular/core';
import { EmissionFactor } from '../models/emission';
import { env } from '../../../env/env';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, Observable, of } from 'rxjs';
import { EMISSION_FACTOR_MOCKS } from '../const/emission-factor.const';
import { PaginatedBaseService } from '../../shell/services/paginated.service';
import { PaginatedData } from '../../shell/models/paginated-service.model';

@Injectable({
  providedIn: 'root',
})
export class EmissionsFactorService extends PaginatedBaseService<EmissionFactor> {
  private apiUrl = env.URL + '/api/emission-factors';
  constructor(private http: HttpClient) {
    super();
  }

  getAllPaginated(
    page: number,
    size: number,
  ): Observable<PaginatedData<EmissionFactor>> {
    // const requestUrl: URL = new URL(this.apiUrl);
    //
    // requestUrl.searchParams.set('page', page.toString());
    // requestUrl.searchParams.set('size', size.toString());

    return of({
      data: EMISSION_FACTOR_MOCKS,
      page: page,
      pageSize: size,
    }).pipe(delay(1000));

    // return this.http.get<PaginatedData<EmissionFactor>>(requestUrl.toString()).pipe(
    //   catchError(this.handleError)
    // );
  }

  create(item: EmissionFactor): Observable<EmissionFactor> {
    console.log(item);
    return of(item).pipe(delay(1000));

    // return this.http.post<EmissionFactor>(this.apiUrl, item).pipe(
    //   catchError(this.handleError)
    // );
  }

  read(id: string): Observable<EmissionFactor | null> {
    return this.http
      .get<EmissionFactor>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  update(id: string, item: EmissionFactor): Observable<EmissionFactor | null> {
    return this.http
      .put<EmissionFactor>(`${this.apiUrl}/${id}`, item)
      .pipe(catchError(this.handleError));
  }

  delete(id: string): Observable<void | null> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
}
