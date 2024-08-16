import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../models/employee.model';

const EMPLOYEE_ACTIONS = '[Employee]';

export class EmployeeActionGetAll {
  static readonly type = `${EMPLOYEE_ACTIONS} Get All`;
}
export class EmployeeActionGetAllSuccess {
  static readonly type = `${EMPLOYEE_ACTIONS} Get All Success`;
  constructor(public payload: Employee[]) {}
}
export class EmployeeActionGetAllFailure {
  static readonly type = `${EMPLOYEE_ACTIONS} Get All Failure`;

  constructor(public payload: { error: HttpErrorResponse }) {}
}
