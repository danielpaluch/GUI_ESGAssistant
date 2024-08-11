import { BaseStateModel } from '../../shell/state/base.state';

export interface Employee {
  id: string;
  name: string;
  email: string;
}

export interface EmployeesStateModel extends BaseStateModel<Employee> {}
