import { Selector } from '@ngxs/store';
import { TeamsState } from '../state/teams.state';
import { Team, TeamsStateModel } from '../models/team.model';

export class TeamStateSelectors {
  @Selector([TeamsState])
  static getTeams(state: TeamsStateModel): Team[] | null {
    return state.entities;
  }

  @Selector([TeamsState])
  static getLoading(state: TeamsStateModel): boolean {
    return state.loading;
  }
}
