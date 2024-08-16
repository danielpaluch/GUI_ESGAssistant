import { Injectable } from '@angular/core';
import { BaseService } from '../../shell/services/base.service';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { env } from '../../../env/env';
import { catchError, delay, Observable, of } from 'rxjs';
import { MOCK_EMPLOYEES } from '../consts/employees.const';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService extends BaseService<Employee> {
  private apiUrl = env.URL + '/api/employees';

  constructor(private http: HttpClient) {
    super();
  }

  create(item: Employee): Observable<Employee | null> {
    return this.http
      .post<Employee>(this.apiUrl, item)
      .pipe(catchError(this.handleError));
  }

  getAll(): Observable<Employee[]> {
    return of(MOCK_EMPLOYEES).pipe(delay(1000));
  }

  read(id: string): Observable<Employee | null> {
    return this.http
      .get<Employee>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  update(id: string, item: Employee): Observable<Employee | null> {
    return this.http
      .put<Employee>(`${this.apiUrl}/${id}`, item)
      .pipe(catchError(this.handleError));
  }

  delete(id: string): Observable<void | null> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
}
