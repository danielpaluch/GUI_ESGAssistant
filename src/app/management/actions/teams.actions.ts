import { Team } from '../models/team.model';
import { Employee } from '../models/employee.model';

export class FetchTeams {
  static readonly type = '[Teams] Fetch teams';
}

export class UpdateTeam {
  static readonly type = '[Teams] Update team';
  constructor(public payload: { id: string; item: Team }) {}
}

export class UpdateTeamMember {
  static readonly type = '[Teams] Update team employee';
  constructor(public payload: { team: Team; employee: Employee }) {}
}
