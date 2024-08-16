import { Action, State, StateContext } from '@ngxs/store';
import { inject } from '@angular/core';
import { Team, TeamsStateModel } from '../models/team.model';
import { TeamService } from '../services/team.service';
import {
  TeamActionGetAll,
  TeamActionGetAllFailure,
  TeamActionGetAllSuccess,
  TeamActionUpdate,
  TeamActionUpdateFailure,
  TeamActionUpdateSuccess,
} from '../actions/team.actions';
import { catchError, of, tap } from 'rxjs';

@State<TeamsStateModel>({
  name: 'TEAMS',
  defaults: {
    entities: [],
    selectedEntity: null,
    loading: false,
    error: null,
  },
})
export class TeamsState {
  httpService: TeamService = inject(TeamService);

  @Action(TeamActionGetAll)
  getAll(ctx: StateContext<TeamsStateModel>) {
    ctx.patchState({ loading: true, error: null });

    return this.httpService.getAll().pipe(
      tap((data: Team[]) => ctx.dispatch(new TeamActionGetAllSuccess(data))),
      catchError((error) => ctx.dispatch(new TeamActionGetAllFailure(error))),
    );
  }

  @Action(TeamActionGetAllSuccess)
  getAllSuccess(
    ctx: StateContext<TeamsStateModel>,
    { payload }: TeamActionGetAllSuccess,
  ) {
    ctx.patchState({
      entities: payload,
      selectedEntity: null,
      loading: false,
      error: null,
    });
  }

  @Action(TeamActionGetAllFailure)
  getAllFailure(
    ctx: StateContext<TeamsStateModel>,
    { payload }: TeamActionGetAllFailure,
  ) {
    ctx.patchState({
      loading: false,
      error: null,
    });
    return of(null);
  }

  @Action(TeamActionUpdate)
  updateTeam(
    ctx: StateContext<TeamsStateModel>,
    { payload }: TeamActionUpdate,
  ) {
    const { id, item } = payload;

    ctx.patchState({ loading: true, error: null });
    return this.httpService.update(id, item).pipe(
      tap((data: Team) => ctx.dispatch(new TeamActionUpdateSuccess(data))),
      catchError((error) => ctx.dispatch(new TeamActionUpdateFailure(error))),
    );
  }

  @Action(TeamActionUpdateSuccess)
  updateSuccess(
    ctx: StateContext<TeamsStateModel>,
    { payload }: TeamActionUpdateSuccess,
  ) {
    ctx.patchState({
      entities: [...ctx.getState().entities, payload],
      selectedEntity: payload,
      loading: false,
      error: null,
    });
  }

  @Action(TeamActionUpdateFailure)
  updateFailure(
    ctx: StateContext<TeamsStateModel>,
    { payload }: TeamActionUpdateFailure,
  ) {
    ctx.patchState({
      loading: false,
      error: null,
    });
    return of(null);
  }
}
