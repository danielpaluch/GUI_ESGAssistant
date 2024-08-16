import { Team } from '../models/team.model';
import { HttpErrorResponse } from '@angular/common/http';

const TEAM_ACTIONS = '[Team]';

export class TeamActionGetAll {
  static readonly type = `${TEAM_ACTIONS} Get All`;
}
export class TeamActionGetAllSuccess {
  static readonly type = `${TEAM_ACTIONS} Get All Success`;
  constructor(public payload: Team[]) {}
}
export class TeamActionGetAllFailure {
  static readonly type = `${TEAM_ACTIONS} Get All Failure`;

  constructor(public payload: { error: HttpErrorResponse }) {}
}

export class TeamActionUpdate {
  static readonly type = `${TEAM_ACTIONS} Update`;
  constructor(public payload: { id: string; item: Partial<Team> }) {}
}

export class TeamActionUpdateSuccess {
  static readonly type = `${TEAM_ACTIONS} Update Success`;
  constructor(public payload: Team) {}
}
export class TeamActionUpdateFailure {
  static readonly type = `${TEAM_ACTIONS} Update Failure`;

  constructor(public payload: { error: HttpErrorResponse }) {}
}
