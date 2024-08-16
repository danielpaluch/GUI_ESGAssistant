import { Component, inject, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Employee } from '../../models/employee.model';
import { Team } from '../../models/team.model';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { EmployeeActionGetAll } from '../../actions/employees.action';
import { TeamActionGetAll } from '../../actions/team.actions';
import { EmployeeStateSelectors } from '../../selectors/employee.selector';
import { TeamStateSelectors } from '../../selectors/team.selector';

@Component({
  selector: 'app-management-container',
  templateUrl: './management-container.component.html',
  styleUrl: './management-container.component.scss',
})
export class ManagementContainerComponent implements OnInit {
  store: Store = inject(Store);

  ngOnInit() {
    this.store.dispatch(new EmployeeActionGetAll());
    this.store.dispatch(new TeamActionGetAll());
  }

  get employees$(): Observable<Employee[] | null> {
    return this.store.select(EmployeeStateSelectors.getEmployee);
  }

  get employeesLoading$(): Observable<boolean> {
    return this.store.select(EmployeeStateSelectors.getLoading);
  }

  get teams$(): Observable<Team[] | null> {
    return this.store.select(TeamStateSelectors.getTeams);
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
