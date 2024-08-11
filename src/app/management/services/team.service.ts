import { Injectable } from '@angular/core';
import { BaseService } from '../../shell/services/base.service';
import { HttpClient } from '@angular/common/http';
import { env } from '../../../env/env';
import { catchError, delay, Observable, of } from 'rxjs';
import { Team } from '../models/team.model';
import { TEAMS_MOCK } from '../consts/team.const';

@Injectable({
  providedIn: 'root',
})
export class TeamService extends BaseService<Team> {
  private apiUrl = env.URL + '/api/team';

  constructor(private http: HttpClient) {
    super();
  }

  create(item: Team): Observable<Team | null> {
    return this.http
      .post<Team>(this.apiUrl, item)
      .pipe(catchError(this.handleError));
  }

  getAll(): Observable<Team[]> {
    return of(TEAMS_MOCK).pipe(delay(1000));
    // return this.http.get<Employee[]>(this.apiUrl).pipe(
    //   catchError(this.handleError)
    // );
  }

  read(id: string): Observable<Team | null> {
    return this.http
      .get<Team>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  update(id: string, item: Team): Observable<Team | null> {
    return this.http
      .put<Team>(`${this.apiUrl}/${id}`, item)
      .pipe(catchError(this.handleError));
  }

  delete(id: string): Observable<void | null> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
}
