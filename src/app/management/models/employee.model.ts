import { BaseStateModel } from '../../shell/models/base-service.model';

export interface Employee {
  id: string;
  name: string;
  email: string;
}

export interface EmployeesStateModel extends BaseStateModel<Employee> {}
