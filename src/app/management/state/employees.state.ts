import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Employee, EmployeesStateModel } from '../models/employee.model';
import { FetchEmployees } from '../actions/employees.action';
import { BaseState } from '../../shell/state/base.state';
import { EmployeeService } from '../services/employee.service';
import { inject } from '@angular/core';

@State<EmployeesStateModel>({
  name: 'EMPLOEES',
  defaults: {
    data: [],
    loading: false,
    error: null,
  },
})
export class EmployeesState extends BaseState<Employee> {
  httpService: EmployeeService = inject(EmployeeService);

  @Selector()
  static getEmployee(state: EmployeesStateModel): Employee[] | null {
    return state.data;
  }

  @Selector()
  static getLoading(state: EmployeesStateModel): boolean {
    return state.loading;
  }

  @Action(FetchEmployees)
  fetchEmployees(ctx: StateContext<EmployeesStateModel>) {
    return this.getAll(ctx);
  }
}
