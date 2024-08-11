import { Component, inject, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Employee } from '../../models/employee.model';
import { Team } from '../../models/team.model';
import { Store } from '@ngxs/store';
import { FetchEmployees } from '../../actions/employees.action';
import { Observable } from 'rxjs';
import { EmployeesState } from '../../state/employees.state';
import { TeamsState } from '../../state/teams.state';
import { FetchTeams } from '../../actions/teams.actions';

@Component({
  selector: 'app-management-container',
  templateUrl: './management-container.component.html',
  styleUrl: './management-container.component.scss',
})
export class ManagementContainerComponent implements OnInit {
  store: Store = inject(Store);

  ngOnInit() {
    this.store.dispatch(FetchEmployees);
    this.store.dispatch(FetchTeams);
  }

  get employees$(): Observable<Employee[] | null> {
    return this.store.select(EmployeesState.getEmployee);
  }

  get employeesLoading$(): Observable<boolean> {
    return this.store.select(EmployeesState.getLoading);
  }

  get teams$(): Observable<Team[] | null> {
    return this.store.select(TeamsState.getTeams);
  }

  drop(event: CdkDragDrop<Employee[]>, teamId: string | null) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
