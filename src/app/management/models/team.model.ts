import { Employee } from './employee.model';
import { BaseStateModel } from '../../shell/state/base.state';

export interface Team {
  id: string;
  name: string;
  members: Employee[];
  color: string;
}

export interface TeamsStateModel extends BaseStateModel<Team> {}
