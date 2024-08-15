import { Employee } from './employee.model';
import { BaseStateModel } from '../../shell/models/base-service.model';

export interface Team {
  id: string;
  name: string;
  members: Employee[];
  color: string;
}

export interface TeamsStateModel extends BaseStateModel<Team> {}
