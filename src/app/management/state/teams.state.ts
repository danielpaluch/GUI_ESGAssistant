import { Action, Selector, State, StateContext } from '@ngxs/store';
import { BaseState } from '../../shell/state/base.state';
import { inject } from '@angular/core';
import { Team, TeamsStateModel } from '../models/team.model';
import { TeamService } from '../services/team.service';
import {
  FetchTeams,
  UpdateTeam,
  UpdateTeamMember,
} from '../actions/teams.actions';

@State<TeamsStateModel>({
  name: 'TEAMS',
  defaults: {
    entities: [],
    selectedEntity: null,
    loading: false,
    error: null,
  },
})
export class TeamsState extends BaseState<Team> {
  httpService: TeamService = inject(TeamService);

  @Selector()
  static getTeams(state: TeamsStateModel): Team[] | null {
    return state.entities;
  }

  @Selector()
  static getLoading(state: TeamsStateModel): boolean {
    return state.loading;
  }

  @Action(FetchTeams)
  getAllTeams(ctx: StateContext<TeamsStateModel>) {
    return this.getAll(ctx);
  }

  @Action(UpdateTeam)
  updateTeam(ctx: StateContext<TeamsStateModel>, action: UpdateTeam) {
    // const {id, item} = action.payload;
    // return this.update(ctx, id, item);
  }

  @Action(UpdateTeamMember)
  updateTeamMember(
    ctx: StateContext<TeamsStateModel>,
    action: UpdateTeamMember,
  ) {
    const { team, employee } = action.payload;
    const newTeam: Team = {
      ...team,
      members: [...team.members],
    };
  }
}
