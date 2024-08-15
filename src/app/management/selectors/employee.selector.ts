import { Selector } from '@ngxs/store';
import { Employee, EmployeesStateModel } from '../models/employee.model';
import { EmployeesState } from '../state/employees.state';

export class EmployeeStateSelectors {
  @Selector([EmployeesState])
  static getEmployee(state: EmployeesStateModel): Employee[] | null {
    return state.entities;
  }

  @Selector([EmployeesState])
  static getLoading(state: EmployeesStateModel): boolean {
    return state.loading;
  }
}
