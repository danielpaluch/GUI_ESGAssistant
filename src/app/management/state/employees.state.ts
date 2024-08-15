import { Action, State, StateContext } from '@ngxs/store';
import { Employee, EmployeesStateModel } from '../models/employee.model';
import {
  EmployeeActionGetAll,
  EmployeeActionGetAllFailure,
  EmployeeActionGetAllSuccess,
} from '../actions/employees.action';
import { EmployeeService } from '../services/employee.service';
import { inject } from '@angular/core';
import { catchError, of, tap } from 'rxjs';

@State<EmployeesStateModel>({
  name: 'EMPLOEES',
  defaults: {
    entities: [],
    selectedEntity: null,
    loading: false,
    error: null,
  },
})
export class EmployeesState {
  httpService: EmployeeService = inject(EmployeeService);

  @Action(EmployeeActionGetAll)
  getAll(ctx: StateContext<EmployeesStateModel>) {
    ctx.patchState({ loading: true, error: null });

    return this.httpService.getAll().pipe(
      tap((data: Employee[]) =>
        ctx.dispatch(new EmployeeActionGetAllSuccess(data)),
      ),
      catchError((error) =>
        ctx.dispatch(new EmployeeActionGetAllFailure(error)),
      ),
    );
  }

  @Action(EmployeeActionGetAllSuccess)
  getAllSuccess(
    ctx: StateContext<EmployeesStateModel>,
    { payload }: EmployeeActionGetAllSuccess,
  ) {
    ctx.patchState({
      entities: payload,
      selectedEntity: null,
      loading: false,
      error: null,
    });
  }

  @Action(EmployeeActionGetAllFailure)
  getAllFailure(
    ctx: StateContext<EmployeesStateModel>,
    { payload }: EmployeeActionGetAllFailure,
  ) {
    ctx.patchState({
      loading: false,
      error: null,
    });
    return of(null);
  }
}
