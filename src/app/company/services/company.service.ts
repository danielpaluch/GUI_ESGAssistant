import { Injectable } from '@angular/core';
import { env } from '../../../env/env';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shell/services/base.service';
import { catchError, delay, Observable, of } from 'rxjs';
import { COMPANIES_MOCK, COMPANY_MOCK } from '../const/companies.const';
import { Company, CompanyCreateData } from '../models/company.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService extends BaseService<Company> {
  private apiUrl = env.URL + '/api/companies';

  constructor(private http: HttpClient) {
    super();
  }

  create(item: CompanyCreateData): Observable<Company> {
    return of({ ...COMPANY_MOCK, ...item }).pipe(delay(1000));
    // return this.http
    //   .post<Company>(this.apiUrl, item)
  }

  getAll(): Observable<Company[]> {
    return of(COMPANIES_MOCK).pipe(delay(1000));
  }

  read(id: string): Observable<Company | null> {
    return this.http
      .get<Company>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  update(id: string, item: Partial<Company>): Observable<Company> {
    return of({
      ...COMPANIES_MOCK[0],
      ...item,
    }).pipe(delay(1000));
    // return this.http
    //   .put<Company>(`${this.apiUrl}/${id}`, item)
    //   .pipe(catchError(this.handleError));
  }

  delete(id: string): Observable<void> {
    return of(undefined).pipe(delay(1000)); // Simulate async operation
    // return this.http
    //   .delete<void>(`${this.apiUrl}/${id}`)
    //   .pipe(catchError(this.handleError));
  }
}
