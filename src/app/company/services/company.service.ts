import { Injectable } from '@angular/core';
import { env } from '../../../env/env';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shell/services/base.service';
import { Company } from '../state/company.state';
import { catchError, delay, Observable, of } from 'rxjs';
import { COMPANIES_MOCK } from '../const/companies.const';

@Injectable({
  providedIn: 'root',
})
export class CompanyService extends BaseService<Company> {
  private apiUrl = env.URL + '/api/companies';

  constructor(private http: HttpClient) {
    super();
  }

  create(item: Company): Observable<Company | null> {
    return this.http
      .post<Company>(this.apiUrl, item)
      .pipe(catchError(this.handleError));
  }

  getAll(): Observable<Company[]> {
    return of(COMPANIES_MOCK).pipe(delay(1000));
  }

  read(id: string): Observable<Company | null> {
    return this.http
      .get<Company>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  update(id: string, item: Company): Observable<Company | null> {
    return this.http
      .put<Company>(`${this.apiUrl}/${id}`, item)
      .pipe(catchError(this.handleError));
  }

  delete(id: string): Observable<void | null> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
}
